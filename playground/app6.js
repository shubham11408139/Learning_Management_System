var event =require('events');

var myEmitter=new event.EventEmitter();//published event
myEmitter.on('someEvent',function(mssg){//subscription
    console.log(mssg);

});
//raise/trigger
myEmitter.emit('someEvent','the event was Triggered!');
