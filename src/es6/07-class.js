
//declared
class User {

}

//instantiated class
// const newUser = new User();

class user {
  // methods
  greeting() {
    return 'Hello';
  }
}

const julian = new user();
console.log(julian.greeting());
const david = new user();
console.log(david.greeting());


// constructor

class user {
  //constructor
  constructor() {
    console.log('constructor');
  }
  greeting() {
    return 'Hello';
  }
}

const ana = new user();

//this 

class user {
  constructor(name){
    this.name = name;
  }
  //methods
  speak() {
    return 'Hello'
  }
  greeting() {
    return `${this.speak} ${this.name}`;
  }
}

// setters getters

class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    return 'Hello'
  }
  greeting(){
    return `${this.speak} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(n) {
    this.age = n;
  }


}

const david1 = new user('David', 15);
console.log(david1.uAge);
console.log(david1.uAge = 23);