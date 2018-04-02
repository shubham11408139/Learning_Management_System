//regular function
function sayHi(){
    console.log('function');

}
//function calll
sayHi();

//function expression| Anonymous functionn does not have any name
 var sayBye=function(){
    console.log('boy');
}
//sayBye();
function callFunc(fun){//function takes an argument
fun();
}
callFunc(sayBye);//passing a function expression as an argument