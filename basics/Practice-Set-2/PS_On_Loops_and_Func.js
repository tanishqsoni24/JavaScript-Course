// Q1

const obj = {
    "Tanishq" : 100,
    "Shubh" : 99,
    "Neeraj" : 98,
    "Pratham" : 97,
}

for(let i in obj){
    console.log("Marks of",i,"is",obj[i]);
}

// Q2 : Q1 using only for

for(let i = 0;i<Object.keys(obj).length;i++){
    console.log("Marks of",Object.keys(obj)[i],"is",obj[Object.keys(obj)[i]]);
}