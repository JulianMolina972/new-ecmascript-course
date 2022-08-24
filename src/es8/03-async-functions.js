const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true) 
    ? setTimeout(() => resolve('Hello'), 3000)
    : reject(new Error('Error'))  
  })
}

const anotherFunction = () => {
  const hello =  fnAsync()
  console.log(hello)
  console.log('Finished')
}

console.log('before')
anotherFunction()
console.log('after')