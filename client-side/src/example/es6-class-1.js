function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.getPosition = function () {
  return '(' + this.x + ' ,' + this.y + ')'
}
let p1 = new Point(2, 3)
console.log(p1)
console.log(p1.getPosition())

class Info {
  constructor(age) {
    this._age = age
  }
  set age(newAge) {
    console.log(`new age is: ${newAge}`)
  }
  get age() {
    return this._age
  }
  static getInfoName() {
    return Info.name
  }
}
const info = new Info(18)
info.age = 19
console.log(info.age)
console.log(Info.getInfoName())