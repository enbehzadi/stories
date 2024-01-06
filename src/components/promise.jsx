const promise=new promise((resolve,reject)=>
{
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise.then(
  result=>{
    console.log(result)

  },error=>{
    console.log(error)
  }
)