const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hello');
    } else {
      reject('Goodbye');
    }
  })
}

anotherFunction() 
  .then(response => console.log(response))
  .catch(error => console.log(error))