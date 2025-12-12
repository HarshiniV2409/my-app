const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet',msg => console.log(msg));
emitter.emit('greet','Hello from EventEmitter');