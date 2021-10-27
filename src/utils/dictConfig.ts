export default class DictConfig {
  map = {}
  list: DictValue[]
  dictValueList: DictValue[]
  private _valueMap = {} // 私有属性，尽量不要访问
  private _listValueMap = {} // 私有属性，尽量不要访问
  constructor(list = []) {
    if (!Array.isArray(list) || (Array.isArray(list) && !list.length)) {
      throw new Error('缺少初始化参数或初始化参数不正确')
    }
    this.list = list
    const map = {}
    const dictValueList = [] as DictValue[]
    const listValueMap = {}
    list.forEach((item: DictValue) => {
      dictValueList.push(item.value)
      map[item.key] = item
      this._valueMap[item.value] = item
      if (Array.isArray(item.value)) {
        item.value.forEach((valueItem) => {
          // if (listValueMap.hasOwnProperty(valueItem)){
          //   console.error('value为list的初始化数据中包含重复的value,请确定配置是否正确')
          // }
          listValueMap[valueItem] = item
        })
      }
    })
    this._listValueMap = listValueMap
    this.dictValueList = dictValueList
    this.map = map
  }

  public custom(list = []): DictValue[] | any {
    if (!list || !Object.values(list).length) {
      const list = JSON.parse(JSON.stringify(this.list)) || []
      return {
        changeName: (changeConfig = [] as DictValue[]) => {
          if (!Array.isArray(changeConfig) || !changeConfig.length) {
            throw new Error('缺少自定义参数')
          }
          const values = changeConfig.map((item: DictValue) => item.value)
          list.map((item: DictValue) => {
            if (values.includes(item.value)) {
              item.name = changeConfig[values.indexOf(item.value)].name
            }
            return item
          })
          const newDictConfig = new DictConfig(list)
          return {
            end: newDictConfig,
            ...newDictConfig.custom()
          }
        },
        filterMap: (filterConfig = [] as DictValue[]) => {
          if (!filterConfig || (Array.isArray(filterConfig) && !filterConfig.length)) {
            throw new Error('缺少过滤参数')
          }
          if (!Array.isArray(filterConfig)) {
            filterConfig = [filterConfig]
          }
          const newArray = list.filter((item: DictValue) => {
            return !filterConfig.includes(item.value)
          })
          const newDictConfig = new DictConfig(newArray)
          return {
            end: newDictConfig,
            ...newDictConfig.custom()
          }
        }
      }
    }
    return new DictConfig(list)
  }

  public getInfo = (value: number | string): DictValue | number | string => {
    if (value === null || value === undefined) {
      return value
    }
    if (!this._valueMap[value] && !this._listValueMap[value]) {
      console.error('value值不在初始化数据中')
      return value
    }
    if (this._valueMap[value]) {
      return this._valueMap[value]
    }
    return this._listValueMap[value]
  }
  public getName = (value: number | string): string | number => {
    if (value === null || value === undefined) {
      return value
    }
    if (!this._valueMap[value] && !this._listValueMap[value]) {
      console.error('value值不在初始化数据中')
      return value
    }
    if (this._valueMap[value]) {
      return this._valueMap[value].name
    }
    return this._listValueMap[value].name
  }

  public getNameFormList(value: number | string): number | string {
    let obj = {
      name: value
    }
    this.list.some((item: DictValue) => {
      if (item.value.includes(value) && !item.getNameIgnore) {
        obj = item
      }
    })
    return obj.name
  }
}
