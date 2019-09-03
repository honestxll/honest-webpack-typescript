// const getArray = <T>(
//   value: T,
//   times: number = 5,
// ): T[] => new Array(times).fill(value)

// console.log(getArray(2, 3))
// console.log(getArray('abc', 4).map((item) => item.length))
// console.log(getArray<number>(2, 4).map((item) => item.toFixed()))

const getArray = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
  return new Array(times).fill([param1, param2])
}

getArray<number, string>(1, 'a', 3).forEach((item) => {
  console.log(item[0].toFixed())
  console.log(item[1].length)
})

let getArray2: <T>(arg: T, times: number) => T[]
getArray2 = (arg: any, times: number): any[] => {
  return new Array(times).fill(arg)
}

type GetArray = <T>(arg: T, times: number) => T[]
let getArray3: GetArray = (arg: any, times: number) => new Array(times).fill(arg)

// interface GetArray2 {
//   <T>(arg: T, times: number): T[]
// }

interface ValueWithLength {
  length: number
}
const getArray4 = <T extends ValueWithLength>(arg: T, times: any): T[] => {
  return new Array(times).fill(arg)
}
console.log(getArray4({
  length: 3,
  name: 'tom',
}, 3))

interface GetPropsObject {
  [index: string]: { message: string };
}
const getProps = (object: GetPropsObject, propName: (string | number)) => object[propName]
