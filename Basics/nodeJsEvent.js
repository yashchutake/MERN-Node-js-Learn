const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please Turn OFF Mptor !');
  setTimeout(() => {
    console.log('URGENT...Please Turn OFF Mptor !');
  }, 3000);
});

console.log("script is running");
console.log("script is STILL running");

myEmitter.emit('WaterFull');