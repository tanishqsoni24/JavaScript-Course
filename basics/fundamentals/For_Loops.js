// For Loop

for(let i = 0; i <5; i++){
    console.log(i);
}

// For In Loop - iterate in object on its keys.

let Stu1 = {
    Name : "Tanishq",
    Section : "D",
    Univ_Rno : 2115001034
}

for(let i in Stu1){
    console.log(i,"of Stu1 is",Stu1[i]);
}

// For of Loop - iterate variable with its values of object (not the values of obj datatype);

for(let i of "Tanishq"){
    console.log(i)
}