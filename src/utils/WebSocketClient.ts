import SockJSClient from 'sockjs-client/dist/sockjs.js'
import StompJs from 'stompjs'
import Md5 from 'blueimp-md5'
const CONNECTION_TRY_REPLY_TIME = 5000;
export default class WebSocketClient {
    client: StompJs.Client
    url: string
    clientType: string
    eventTypeHandle: Map<string, Map<string, (message: StompJs.Message) => any>>
    handlerKeys: Set<String>
    globalIndex: number
    private currentConnectionPromise = Promise.resolve()
    token: string
    constructor(public connectionUrl: string, getToken?: () => string, clientType: string = 'client') {
        this.url = connectionUrl
        this.clientType = clientType
        this.globalIndex = 0
        this.eventTypeHandle = new Map()
        this.handlerKeys = new Set()
        if (getToken != null) {
            this.token = getToken()
        }
    }

    setToken(token) {
        this.token = token
    }

    isConnectioned() {
        return this.client && this.client.connected
    }
    async initClient() {
        this.tryConnection()
    }

    private tryConnection() {
        this.currentConnectionPromise = new Promise(async (resolve, reject) => {
            try {
                const webSocket: WebSocket = new SockJSClient(this.connectionUrl)
                const stompClient = StompJs.over(webSocket)
                this.client = stompClient
                stompClient.connect(this.clientType, this.token, () => {
                    this.resetRegisterHandle()
                    resolve()
                })
                webSocket.onclose = () => {
                    setTimeout(() => this.initClient(), CONNECTION_TRY_REPLY_TIME)
                    reject()
                }
            } catch (error) {
                reject(error)
            }
        })
        return this.currentConnectionPromise
    }

    sendMessage(type: string, data: Object): Promise<any> {
        return new Promise((resolove, reject) => {
            this.sendMessagePrivate(type, data, resolove, reject)
        })
    }

    private sendMessagePrivate(type: string, data: Object, resolove: Function, reject: Function) {
        this.currentConnectionPromise.then(() => {
            this.client.send(type, {}, JSON.stringify(data))
        })
    }

    resetRegisterHandle() {
        this.handlerKeys.clear()
        this.eventTypeHandle.forEach((value, type) => {
            value.forEach((handle, handleId) => {
                console.log('register handle: ', type, handle, handleId)
                this.registerHandle(type, handle, handleId)
            })
        })
    }

    registerUserHandle(type: string, handle: (message: StompJs.Message) => any, handleId: string = this.handleIdCreate(type, handle)) {
        this.registerHandle('/user' + type, handle, handleId)
    }

    registerHandle(type: string, handle: (message: StompJs.Message) => any, handleId: string = this.handleIdCreate(type, handle)) {
        this.currentConnectionPromise.then(() => {
            this.globalIndex ++
            let handleMap = this.eventTypeHandle.get(type)
            if (!handleMap) {
                handleMap = new Map()
            }
            if (!this.handlerKeys.has(handleId)) {
                this.handlerKeys.add(handleId)
                handleMap.set(handleId, handle)
                this.client.subscribe(type, handle)
            }
            this.eventTypeHandle.set(type, handleMap)
            return handleId
        })
    }

    unRegisterHandle(type: string, handle: (message: StompJs.Message) => any, handleId: string = this.handleIdCreate(type, handle)) {
        const map = this.eventTypeHandle.get(type)
        if (map !== null && handleId != null) {
            map.delete(handleId)
        }
    }

    private handleIdCreate(type:string, handle: any) {
        return type + '_' + Md5(handle.toString())
    }
}

