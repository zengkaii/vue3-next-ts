interface DictValue {
  name: string | number
  value: number | string | array
  key: string
  getNameIgnore?: boolean
}

declare type DictValue = DictValue
