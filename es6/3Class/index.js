// 基本用法
/*
{
    class Point {
        constructor(x,y){
            this.x = x;
            this.y = y;
        }

        toString(){
            return `(${this.x},${this.y})`;
        }
    }

    let  p = new  Point(1,2);
    console.log("p",p.toString());
    console.log("constructor",Point.prototype.constructor === Point); //类的数据类型就是函数，类本身就指向构造函数
}
*/
// 静态方法
/*
{
    class Animal{
        static baz() {
            console.log("static baz");
        }

        baz(){
            console.log("intance baz");
        }
        static eat() {
            console.log("eat");
            this.baz();//this指 类
        }
    }

    Animal.eat();
}
*/
// 实例属性定义在最顶层  无效？？？
/*
{
    class IncreasingCounter {
        constructor(){
            this._count = 0;
        }

        get value(){
            console.log("getting");
            return this._count;
        }

        increse(){
            this._count ++; 
        }
    }
    let  ic = new IncreasingCounter();
    console.log("value",ic.value);
    ic.increse();
    console.log("value",ic.value);
}
*/

// 私有属性 
{
    //使bar成为了当前模块的私有方法 ？？
    class Widget {
        foo (baz){
            bar.call(this.baz);
        }
    }

    function bar(baz){
        return this.snaf = baz;
    }

    var w = new Widget();
    w.foo();
    bar();
    // w.bar();

    //2---利用Symbol的唯一性

    const bar = Symbol("bar");
    const snaf = Symbol("snaf");

    class myClass {
        //公有方法
        foo(baz){

        }

        [bar](baz){
            
        }
    }
}