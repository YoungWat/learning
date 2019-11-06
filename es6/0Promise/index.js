// 1、Promise 基础用法 ---
{
  const asyncFunc = (flag)=>{
    return  new Promise((resolve,reject)=>{
      console.log("wait");
      setTimeout(()=>{
        if(flag > 10){
          resolve(flag);
        }else{
          reject(flag);
        }
      },100);
    });
  }
}
/*
asyncFunc(11)
.then((n)=>{
  console.log("bigger",n);
}).catch((n)=>{
  console.log("smaller",n);
});
*/
// 2、Promise 状态传递---
/*
{
  const p1 = new Promise((resolve,reject)=>{
    // setTimeout(()=>{reject(new Error("fail"))},1000);
    setTimeout(()=>{resolve("p1 done")},400);
  });
  const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("p2 done");
      resolve(p1)},500);
  });
  p2
    .then((res)=>{console.log("res",res)})
    .catch((res)=>{console.log("err",res)})
}
*/
//3、3个Promise 按顺序执行 拼多多面试题---
/*
{
  const a = () => {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("a");
        resolve();
      },300);
    });
  }

  const b = () => {
    return  new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("b");
        resolve();
      },100);
    });
  }

  const c = () => {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("c");
        resolve();
      },200);
    });
  }
  a().then(c).then(b);
  //异步
  a();
  b();
  c();
  // 顺序执行函数
  function excuteP(promiseArr){
    let res = Promise.resolve(); //初始resolve对象
    promiseArr.forEach((itm)=>{
      res = res.then(itm);
    });
  }

  excuteP([a,b,c])
}
*/

// 4 Promise all ---
{
  let a = new Promise((resolve) => {
    console.log("a");
    resolve("a");
  });

  let b = new Promise((resolve) => {
    console.log("b");
    resolve("b");
  });

  Promise
    .all([
      a,
      b
    ])
    .then(() => {
      console.log("done");
    })
}