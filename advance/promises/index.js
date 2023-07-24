// We use promises to handle asynchronous code or to handle code that takes time to execute or tu execute the code parallelly.

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(45)
    }, 5000)
})   // this runs in the background

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error("Error"))
    }, 5000)
})  // this runs in the background

// and both of these promises are running in the background and we can use then and catch to handle the data or error and both run parallelly.

promise1.then((data)=>{
    console.log(data)
})

// promise2.then((data)=>{ 
//     console.log(data)
// })

// promise1.catch((err)=>{
//     console.log(err)
// })

promise2.catch((err)=>{
    console.log("error ocured")
})