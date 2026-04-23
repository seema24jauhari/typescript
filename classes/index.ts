//1. Basic Class


class Person {
  name: string;

  greet() {
    console.log("Hello " + this.name);
  }
}

const p = new Person();
p.name = "Seema";
p.greet();


//2. Constructor

class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const st = new Student("Seema");


//3. Access Modifiers

//a) public (default) 💠 Accessible everywhere

class Owner {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

//b) private 💠 Only inside class

class Animal {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

const an = new Animal(25);
// an.age ❌ error


//c) protected 💠 Accessible in class + child class

class Person1 {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person1 {
  show() {
    console.log(this.name); // ✅ allowed
  }
}