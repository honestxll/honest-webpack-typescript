// function add1(arg1: number, arg2: number): number {
//   return arg1 + arg2
// }
// const add1 = (arg1: number, arg2: number): number => arg1 + arg2

// 指定函数参数类型和返回值类型
let add1: (x: number, y: number) => number
add1 = (arg1: number, arg2: number): number => arg1 + arg2

// 看一下类型别名
type isString = string
type Add = (x: number, y: number) => number

// 函型重载
function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: (number | string)) {
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').map((item) => Number(item))
  }
}
console.log(handleData(123))
console.log(handleData('test'))
