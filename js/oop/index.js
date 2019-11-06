// 类的声明
{
    // es 5
    function Animal(){
        this.name = "name";
    }
    // es 6
    class Animal2{
        constructor(){
            this.name = "name";
        }
    }
    console.log(new Animal(),new Animal2());
}