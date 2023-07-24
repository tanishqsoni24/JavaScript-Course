//  
//     Synchronous Porgramming :

//     - Those statements that are run line-by-line are known as synchronous programming.

//     Asynchronous Programming :

//     - Those statements that are not run line-by-line and the line is scheduled and code is not stopped due to that line are known as asynchronous programming.
// 

// Example for synchronous 

console.log("Hello");
console.log("World");

//  Example for asynchronous 

console.log("start");
setTimeout(() => {
    console.log("Hello World");
}, 2000);
console.log("end");

