// enhanced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    uId
  }
}

console.log(newUser('julian', 23, 'CO', 6));