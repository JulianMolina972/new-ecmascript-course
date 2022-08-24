// arrays destructuring

let fruits = ['Apple', 'Banana', 'Kiwi']
let [a, b, c] = fruits
console.log(a,fruits[1])

//objects destructuring

let user = {username: 'julian', age: 23, country: 'CO'}
let {username, age, country} = user
console.log(username, age, country)


//spread operator

let person= {name: 'julian', age: 23}
let country1 = 'CO'

let data = {id:1, ...person, country: country1}
console.log(data)

//rest 

function sum(num, ...values){
  console.log(values)
  console.log(num + values[0])
  return num + values[0]
}

sum(1, 1, 3, 4, 5);