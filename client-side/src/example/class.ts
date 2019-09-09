class Point {
  public x: number
  public y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  public getPosition() {
    return `(${this.x}, ${this.y})`
  }
}

class Parent4 {
  public name: string
  constructor(name: string) {
    this.name = name
  }
}

class Child4 extends Parent4 {
  constructor(name: string) {
    super(name)
  }
}

class Person5 {
  public name: string
  public readonly salary: string
  protected sex: string
  private age: number

  constructor(age: number, name: string, sex: string, salary: string) {
    this.age = age
    this.name = name
    this.sex = sex
    this.salary = salary
  }
}
console.log(new Person5(12, 'tom', 'man', '7000'))

// 在构造函数中加上访问修饰符，会自动的把对应的属性放到实例上
class A {
  constructor(public name: string) {}
}

console.log(new A('test'))

class Parent6 {
  public static age: number = 8
  public static getAge() {
    return Parent6.age
  }
}
console.log(Parent6.age, Parent6.getAge())

// 可选类属性
class Info {
  public name: string
  public age: number | undefined
  // tslint:disable-next-line: variable-name
  private _infoStr: string | undefined
  constructor(name: string, age?: number, public sex?: string) {
    this.name = name
    if (age) {
      this.age = age
    }
    this.sex = sex
  }
  get infoStr() {
    return this._infoStr
  }
  set infoStr(value) {
    this._infoStr = value
  }
}
console.log(new Info('honest'))

abstract class People6 {
  constructor(public name: string) {}
  public abstract printName(): void
}

class Man extends People6 {
  constructor(name: string) {
    super(name)
    this.name = name
  }
  public printName(): void {
    console.log(this.name)
  }
}
new Man('lison').printName()

interface FoodInterface {
  type: string,
  name: string
}

class FoodClass implements FoodInterface {
  constructor(public type: string, public name: string) {}
}

class AA {
  protected name!: string
}

// tslint:disable-next-line: no-empty-interface
interface I extends AA {}
class B extends AA implements I {
  protected name!: string
}
