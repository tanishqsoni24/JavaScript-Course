let arr = [1,2,3,4,5,6,7,8,9];

// Looping using simplem for loop;

for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}

// Square of each elements using For Each Loop

arr.forEach((element)=> {
    console.log(element*element);
});

// Making HTML Collections an Array using Array.From

let name = "Tanishq Soni";
let result = Array.from(name); //  ['T', 'a', 'n', 'i', 's', 'h', 'q', ' ', 'S', 'o', 'n', 'i']
console.log(result)

// For In - iterate with key/indees = print indexes

for(let i in result) {
    console.log(i); // 0,1,2,3,4,5,6,7,8,9,10,11
}

// For of - iterate with key values/ index values

for(let i of result) {
    console.log(i); // T, a, n, i, s, h, q,  , S, o, n, i
}

// Map Method - iterate with each values and the difference bw foreach an map is that, map return the new array and foreach just iterate through it. 
// It has 3 arguments: element, index, arr

let arr2 = [1,2,3,4,5,6];
let res = arr2.map((element, index, arr)=>{
    console.log(element, index, arr);
    return element*element;
})
console.log(res);

// Array Filter method - In this we iterate with the values of an array and for values filter methods returns true filter method returns that values in an array; 
// For eg:-

let arr3 = [1,2,3,4,5,6,7,8,9,10]
let ans = arr3.filter((element)=>{
    return element>4;
})
console.log(ans);

// Reduce Methods; Reduces the array elements to a single element.

let arr4 = [1,2,3,4,5,4,3,2,1];  
let newArr = arr4.reduce((h1,h2)=>{ 
    return h1+h2;
})
console.log(newArr); // summ of all = 25