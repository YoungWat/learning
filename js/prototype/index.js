/*
{
    // 创建对象的三种方式
    // 1、字面量
    let o1 = {name:"ly"};
    let o2 = new Object({name:"ly"});
    // 2、构造函数
    let C = function(name){
        this.name = name;
    }
    let o3 = new C();
    // 3、Object.create 
    let O = {
        name:"ly",
        age:25
    };

    let child = Object.create(O);
    console.log("child",child.name);
}
*/
// prototype.jpg验证
{   
    //构造函数
    let vConstructor = function(name = "ly"){
        this.name = name;
    }

    let vInstance = new vConstructor();//实例
    let vCPrototype = vConstructor.prototype;
    let vPConstructor = vCPrototype.constructor;
    let vP_p = vCPrototype.__proto__;
    let  vInstance_p = vInstance.__proto__;


    // 构造函数的prototype 指向原型对象，拓展原型对象，所有实例都会拓展方法
    vConstructor.say = function(){
        console.log("say hi");
    }

    //实例的constructor属性指向构造函数
    console.log(vInstance.constructor === vConstructor);

    //实例的__proto__指向原型对象的
    console.log(vInstance.__proto__ === vConstructor.prototype);

    //构造函数的原型对象__proto__指向上一级原型对象 原型链
    console.log(vConstructor.prototype.__proto__);
    /*
    console.log("vConstructor",vConstructor);
    console.log("vInstance",vInstance);
    console.log("vCPrototype",vCPrototype);
    console.log("vPConstructor",vPConstructor);
    console.log("vP_p",vP_p);
    console.log("vInstance_p",vInstance_p);
    */
    // console.log("vConstructor",vConstructor);
    console.log("vInstance",vInstance);
    console.log("vCPrototype",vCPrototype);
    console.log("vPConstructor",vPConstructor);
    console.log("vP_p",vP_p);
    console.log("vInstance_p",vInstance_p);
}