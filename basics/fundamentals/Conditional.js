// Will Run In Browsers

let a=prompt("What's Your Age?");
a = Number.parseInt(a);
if(a>18){
    alert("Valid For License");
}
else{
    alert("inValid For License");
}


// Even Odd using Switch Statements

let b = 20;
switch(b%2){
    case 1:
        console.log("Odd");
        break;
    case 0:
        console.log("Even");
        break;
}

// Even Odd using Ternary Operator

let num = 20;
console.log("You Can",(num>18?"Drive":"Not Drive"));