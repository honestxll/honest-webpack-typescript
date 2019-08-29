const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol('hola')
console.log(s3)

const s4 = Symbol('name')
const info = {
  [s4]: 'Honest',
  age: 18,
  sex: 'man'
}
console.log(info)
/** 以下四种方法都不能获取到 Symbol 属性 */
for (const key in info) {
  console.log(key)
}
console.log(Object.keys(info))
console.log(Object.getOwnPropertyNames(info))
console.log(JSON.stringify(info))
// 可以用下面的方法来获取
console.log(Object.getOwnPropertySymbols(info))
console.log(Reflect.ownKeys(info))



// Symbol.for Symbol.keyFor
const s5 = Symbol.for('hola')
const s6 = Symbol.for('hola')
console.log(Symbol.keyFor(s5), Symbol.keyFor(s6))
// console.log(s5 === s6)