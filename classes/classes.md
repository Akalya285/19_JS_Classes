class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
class Person {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Person {
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
}
class Person {
  static greet() {
    return 'Hello!';
  }
}
class Student extends Person {
  sayHello() {
    return 'Hello!';
  }
}
class Student extends Person {
  getFullName() {
    return `Student: ${super.getFullName()}`;
  }
}
