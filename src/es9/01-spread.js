const user = {username: 'jdmv', age: 23, country: 'CO'};
const {username, ...values} = user;
console.log(username);
console.log(values);