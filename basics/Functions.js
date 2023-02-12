// Normal Functions;

function rndAvgOf(x,y){
    return Math.round((x+y)/2)
}
function avgOf(x,y){
    return (x+y)/2;
}

// Arrow Functions;

const sum = (a,b)=> {
    console.log(a+b);
}

// main()

let a = 1;
let b = 2;
let c = 3;

console.log("Avg of a & b",avgOf(a,b));
console.log("Avg of a & b",rndAvgOf(a,b));
console.log("Avg of a & c",avgOf(a,c));
console.log("Avg of a & c",rndAvgOf(a,c));
console.log("Avg of b & c",avgOf(b,c));
console.log("Avg of b & c",rndAvgOf(b,c));
sum(2,3);