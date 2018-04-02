var counter=function(arr){
    return 'there are'  +  arr.length +'elements in this array';

}
var adder =function(a,b){
    return `the sum of two nos is ${a+b}`;

}
var pi=3.142;
//module.exports.count=counter;
//module.exports.add=adder;
//module.exports.pi=pi;
module.exports={
    count:counter,
    add:adder,
    pi:pi
}
module.exports.addNote=() => {
    console.log('addNote');
    return 'New Note';

}
module.exports.Multiply=(x,y) => {
    return x * y;
}