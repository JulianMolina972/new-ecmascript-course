class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  #speak() {
    return 'Hello'
  }
  greeting(){
    return `${this.speak} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }

  set #uAge(n) {
    this.age = n;
  }


}

const david1 = new user('David', 15);
console.log(david1.uAge);
console.log(david1.uAge = 23);