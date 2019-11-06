// 1 Generator 基本用法
{
    /*
    function* helloWorldGenerator(){
        yield "hello";
        yield "world";
        return "ending";
    }

    let hw = helloWorldGenerator();

    console.log("hw",hw.next());
    console.log("hw",hw.next());
    console.log("hw",hw.next());
*/
/*
    function* gF(){
        console.log("done");
    }
    let generator = gF();
    generator.next();
*/
    function* demo(){
        console.log("hello" + (yield 1));
        console.log("n" + (yield 123));
    }
    let g = demo();
    console.log(g.next());
    console.log(g.next());
}