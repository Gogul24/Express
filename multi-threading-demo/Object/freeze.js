const user = {
     username :'Gokul',
     pass:'Gokul123'
}

const newUser = Object.freeze(user)
newUser.pass='213455'
newUser.active = true;
console.log(newUser);