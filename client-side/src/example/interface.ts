const getFullName = ({ firstName, lastName}: NameInfo) => {
  return `${firstName} ${lastName}`
}

interface NameInfo {
  firstName: string,
  lastName: string
}

getFullName({
  firstName: 'Honest',
  lastName: 'Chen',
})

interface Vegetable {
  color?: string,
  readonly type: string,
  [prop: string]: any,
}
const getvegetables = ({ color, type}: Vegetable): string => {
  return `A ${color ? color + ' ' : ''}${type}`
}

const result = getvegetables({
  size: 2,
  type: 'tomato',
})

console.log(result)

interface ArrInter {
  0: number,
  readonly 1: string
}

let arrTest: ArrInter = [1, 'a']

// 定义一个函数类型的接口
type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2

interface RoleDic {
  [id: number]: string
}

const role: RoleDic = {
  0: 'super_admin',
}

//
interface Vegetables {
  color: string
}

interface Tomato extends Vegetables {
  radius: number
}

const tomato: Tomato = {
  color: 'red',
  radius: 1,
}

// 闭包
const countUp = (() => {
  let count = 0
  return () => count++
})()
countUp()
countUp()
console.log(countUp())

// 混合类型接口改进闭包
interface Counter {
  (): void,
  count: number
}

const getCounter = (): Counter => {
  const c = () => c.count++
  c.count = 0
  return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count)
