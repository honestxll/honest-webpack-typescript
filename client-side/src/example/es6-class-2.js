function Food() {
  this.type = 'food'
}
Food.prototype.getType = function () {
  return this.type
}
function Vegetables(name) {
  this.name = name
}
Vegetables.prototype = new Food()
const tomato = new Vegetables('tomato')
console.log(tomato.getType())


class Parent {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

const c = new Child('lison', 18)
console.log(c)
console.log(c instanceof Child)
console.log(c instanceof Parent)

const bool = Object.getPrototypeOf(Child) === Parent
console.log(bool)


/**
 * super 作为对象
 * 在普通方法中，指向的是父类的原型对象
 * 在静态方法中，指向的是父类
 */
class Parent1 {
  constructor() {
    this.type = 'parent'
  }
  getName() {
    return this.type
  }
}
Parent.getType = () => {
  return 'is parent'
}

class Child1 extends Parent1 {
  constructor() {
    super()
    console.log('constructor: ' + super.getName())
  }
  getParentName() {
    console.log('getParentName: ' + super.getName())
  }
  static getParentType() {
    console.log('getParentType: ' + super.getType())
  }
}
const c1 = new Child1()
console.log(c1.getParentName())
Child1.getParentType()