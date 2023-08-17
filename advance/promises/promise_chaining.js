let pro1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("pro1")
        resolve(45)
    }, 2000)
}).then((i)=>{
    console.log(i)
    return new Promise((resolve, reject)=>{
        console.log("pro2")
        resolve(45)
    })
}).then((i)=>{
    console.log(i)
})