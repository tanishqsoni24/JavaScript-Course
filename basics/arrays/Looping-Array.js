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