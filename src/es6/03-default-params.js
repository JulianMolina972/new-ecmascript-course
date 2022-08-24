function newUser (name, age, country) {
  var name = name || 'Julian';
  var age = age || 23;
  var country = country || 'Colombia';
  console.log(name, age, country);
}

newUser();
newUser('David', 33, 'Canada');

function newAdmin(name = 'Julian', age = 23, country = 'Colombia') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('David', 33, 'Canada');