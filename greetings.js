const EventEmitter = require('events')
const myEmitter = new EventEmitter();

// const greetings = (name,newAge)=>{
//     console.log(`Name : ${name}, New Age: ${newAge}`);
// }

// myEmitter.on('e',greetings)
// myEmitter.emit('e','Gokul',22)
// console.log('hello');

const sayHi=()=>{
    console.log('hello1');
}
const sayHii=()=>{
    console.log('hello2');
}

myEmitter.on('a',sayHi)
myEmitter.emit('a')