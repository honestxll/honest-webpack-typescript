// 布尔类型
let bool: boolean
let bool2: boolean = false


// 数值类型
let num2: number = 123
num2 = 0b1111011
num2 = 0o173
num2 = 0x7b


// 字符串类型
let str: string
str = 'abc'
str = `数值是${num2}`
console.log(str)


// 数组类型
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: (string | number)[] = [1, 'a']
let arr4: Array<(string | number)> = [1, 'a']


// 元组类型
let tuple: [string, number, boolean] = ['a', 1, false]


// 枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER = 5,
  GUEST
}
console.log(Roles, Roles.SUPER_ADMIN, Roles[5])


// any 类型
let value: any
value = [1, 'x', 3]
value = 'abc'


// void 类型
const consoleText = (text: string): void => {
  console.log(text)
}
consoleText('hola')
// void 可以是 undefined 和 null
// 在严格模式下不可以赋成 null
let v: void
v = undefined


// null 和 undefined，它们两是其它类型的子类型
let u: undefined
u = undefined
let n: null
n = null


// never 类型，抛错的和永远没有返回值的
const errorFunc = (message: string): never => {
  throw new Error(message)
}
const infiniteFunc = (): never => {
  while (true) {}
}


// object
let obj = { name: 'Honest' }
let obj2 = obj
function getObject(obj: object): void {
  console.log(obj)
}


// 类型断言
const getLength = (target: string | number): number => {
  if ((<string> target).length || (target as string).length === 0) {
    return (<string> target).length
  } else {
    return target.toString().length
  }
}