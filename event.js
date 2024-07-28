const EventEmitter = require('events')

const myEmitter = new EventEmitter();

const welcomeUser = ()=>{
    console.log('Welcome to Event Emitter');
}

const msg = ()=>{
    console.log(`Hellooooo`);
}

myEmitter.on('abc',welcomeUser)
myEmitter.on('abc',msg)
myEmitter.emit('abc')