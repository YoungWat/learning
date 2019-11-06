{
    // async await 是generator的语法糖
    const fs = require("fs");

    const readFile = (fileName) => {
        return new Promise((resolve,reject) => {
            console.log("readfile",fileName);
            fs.readFile(fileName,(error,data) => {
                if(error) return reject(error);
                resolve(data);
            })
        })
    }

    const gen = function* (){
        const f1 = yield readFile("./file1.txt");
        const f2 = yield readFile("./file2.txt");

        console.log("f1",f1);
        console.log("f2",f2);
    }

    /*
    let g = gen();
    console.log("g",g);
    console.log(g.next().value.then((data) => console.log("data",data)));
    console.log(g.next().value.then((data) => console.log("data2",data)));
    */
}

{
    const fs = require("fs");

    const readFile = (fileName) => {
        return new Promise((resolve,reject) => {
            fs.readFile(fileName,(error,data) => {
                if(error) return reject(error);
                resolve(data);
            })
        })
    }

    const asyncReadFile = async function(){
        const f1 = await readFile("./file1.txt");
        const f2 = await readFile("./file2.txt");

        console.log("f1",f1);
        console.log("f2",f2);
    }

    // asyncReadFile();
}

{
    // 顺序执行 Promise

    let a = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log("a");
                resolve();    
            },300);
        });
    }

    let b = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log("b");
                resolve();
            },1110);
        });
    }

    let c = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log("c");
                resolve();
            },200);
        });
    }

    async function doSync(){
        await a();
        await b();
        await c();
    }

    function doAsync(){
        a();
        b();
        c();
    }
    
    doSync();
    // doAsync();
}