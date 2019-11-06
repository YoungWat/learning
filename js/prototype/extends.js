// 借助构造函数实现继承
/*
{
    function Parent1(){
        this.name = "parent1";
    }
    Parent1.prototype.say = function(){console.log("say hi");}
    function Child1(){
        Parent1.call(this);
        this.type = "child1"
    }
    console.log(new Child1);
    //缺点 Parent 原型对象上的方法不会被继承 只继承了构造函数
}
*/
/*
// 借助原型链实现继承
{
    function Parent2(){
        this.name = "parent2";
        this.play = [1, 2, 3];
    }
    function Child2(){
        this.type = "child2";
    }

    Child2.prototype = new Parent2();
    
    let s1 = new Child2();
    let s2 = new Child2();
    console.log(s1.play);
    console.log(s2.play);
    s1.play.push(5);
    s1.name = "s1";
    console.log(s2.play);
    console.log(s2.name);
    //缺点  s1.__proto__ === s2.__proto__
}
*/
// 组合方式
/*
{
    
    function Parent3(){
        this.name = "parent3";
        this.play = [1, 2, 3];
    }
    function Child3(){
        Parent3.call(this);
        this.type = "child3";
    }
    Child3.prototype = new Parent3();
    let s3 = new Child3();
    let s4 = new Child3();
    s3.play.push(4);

    console.log("s4",s4.play);
    //缺点 父类构造函数 Parent3 执行了两次
}
*/
/*
//组合方式2
{
    function Parent4(){
        this.name = "parent4";
        this.play = [1, 2, 3];
    }
    function Child4(){
        Parent4.call(this);
        this.type = "child4";
    }
    Child4.prototype = Parent4.prototype;
    let s5 = new Child4();
    let s6 = new Child4();
    s5.play.push(4);
    
    console.log("s6",s6.play);

    console.log("s5 instanceof Child4",s5 instanceof Child4);
    console.log("s5 instanceof Parent4",s5 instanceof Parent4);
    console.log("s5.constructor",s5.constructor);
    //缺点 无法区分是直接实例化的还是父类实例化的
}
*/
// 组合方式3 
{
    function Parent5(){
        this.name = "parent5";
        this.play = [1, 2, 3];
    }
    function Child5(){
        Parent5.call(this);
        this.type = "child5";
    }
    Child5.prototype = Object.create(Parent5.prototype); // 创建一个中间对象,其原型对象为父类的原型对象 Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
    Child5.prototype.constructor = Child5;
    
    let s7 = new Child5();
    console.log("s7 instanceof ",s7 instanceof Child5,s7 instanceof Parent5);
    console.log("s7 constructor",s7.constructor);
}
