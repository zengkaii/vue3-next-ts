import Superagent from 'superagent'
function object2KeyValueParnter(obj: any = {}) {
  if (typeof obj !== 'object') {
    return []
  }
  const params: string[] = []
  Object.keys(obj).forEach((k) => {
    let val = obj[k]
    if (val !== '' && val !== undefined && val !== null) {
      if (Array.isArray(val)) {
        val = val.join(',')
      } else if (val instanceof Date) {
        val = val.getTime()
      } else if (typeof val === 'string') {
        val = val.trim()
      }
      params.push(`${k}=${encodeURIComponent(val)}`)
    }
  })
  return params
}
function serialize(obj = {}) {
  const params = object2KeyValueParnter(obj)
  return params.join('&')
}
Superagent.serialize['application/x-www-form-urlencoded'] = serialize

export default {
  post(url: string, params: unknown, header = {}): Promise<any> {
    return Superagent.post(url).type('form').send(params).set(header)
  },
  postJson(url: string, params: unknown, header = {}): Promise<any> {
    return Superagent.post(url).send(params).accept('application/json').set(header)
  },
  get(url: string, params: unknown, header = {}): Promise<any> {
    let buildGet = Superagent.get(url)
    object2KeyValueParnter(params).forEach((param) => {
      buildGet = buildGet.query(param)
    })
    return buildGet.set(header)
  }
}
