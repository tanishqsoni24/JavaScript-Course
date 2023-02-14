let arr = [1,2,3,4,5,6]
console.log(arr.length);
console.log(arr.push(2));
console.log(arr.push(2,3,4));
console.log(arr);
console.log(arr.pop());
console.log(arr.shift());
console.log(arr.unshift(78));
delete arr[1]; // This just emptied that index and not reduced the length;
console.log(arr.concat([1,2,3,4,5,6]));
console.log(arr);
console.log(arr.length);