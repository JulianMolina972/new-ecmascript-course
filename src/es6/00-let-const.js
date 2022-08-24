var lastName = 'Molina'
lastName = "Vargas"
console.log(lastName)


let fruit = 'Apple'
fruit = 'Banana'
console.log(fruit)


const animal = 'Cat'
animal = 'Dog'
console.log(animal)


const fruits = () => {
  if(true) {
    var fruit1 = 'Apple' //function scope
    let fruit2 = 'Banana' //block scope
    const fruit3 = 'Kiwi' //block scope
  }
  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit3)
}

console.log(fruit1)

fruits()