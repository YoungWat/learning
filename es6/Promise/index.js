// 1、Promise 基础用法
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
/*
asyncFunc(11)
.then((n)=>{
  console.log("bigger",n);
}).catch((n)=>{
  console.log("smaller",n);
});
*/
// 2、Promise 状态传递
const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{reject(new Error("fail"))},3000);
});

const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{resolve(p1)},1000);
});

p2
  .then((res)=>{console.log("res",res)})
  .catch((res)=>{console.log("err",res)})