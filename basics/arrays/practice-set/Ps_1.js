// Q1 - ask and add in arr;

let user_Ip = prompt("Enter the number you want to add");
let arr = []
user_Ip = Number.parseInt(user_Ip)
arr.push(user_Ip);
console.log(arr)

// Q2 - ask till zero;

let arr1 = []
while(true){
    let user_ip = prompt();
    user_ip = Number.parseInt(user_ip);
    if(user_ip != 0){
        arr1.push(user_ip);
    }
    else{
        arr1.push(user_ip);
        break;
    }
}
console.log(arr1);

// Q3 - return element%10;

let arr2 = [10,20,30,40,45,65,80];
let ans = arr2.filter((elem)=>{
    return elem%10==0;
})
console.log(ans);

// Q4 - returns element's squares;

let arr3 = [1,2,3,4,5,6,7];
let ans2 = arr3.map((elem)=>{
    return elem*elem;
})
console.log(ans2);

// Q5 - factorial using Reduce method;

let n = 5, arr4=[];
for(let i=1;i<=n;i++){
    arr4.push(i);
}
let ans3 = arr4.reduce((i1,i2)=>{
    return i1*i2;
})
console.log(ans3);