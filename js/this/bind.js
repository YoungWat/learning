function fn(num1,num2){
    return this.a + num1 + num2;
}

var a = 20;
var object = { a: 40};

var _fn = fn.bind(object,1,2);
console.log("_fn === fn",_fn === fn);

console.log(_fn());
console.log(_fn(1,4));
