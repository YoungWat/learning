// instanceof原理
{
    let CStrucor = function(name="ly"){
        this.name = name;
    }
    let inst = new CStrucor();

    console.log("inst.__proto__",inst.__proto__);
    console.log("inst.construcor",inst.constuctor);
    console.log("instanceof",inst instanceof CStrucor);
    console.log("inst.__proto__ === inst.constructor.prototype",inst.__proto__ === inst.constructor.prototype);
}