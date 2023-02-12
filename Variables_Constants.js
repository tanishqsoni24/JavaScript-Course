var a = 10;
a="Tanishq" // Dynamically Typed Language
{
    var a = 50;
}
// The global value of a will be now 50 whether it is defined only in the block.
let b = 125;
{
    let b = "Tanishq";
}
// The global value of a will be now 125 whether it is redefined in the block.
// let a = 122;
// let b = "Tanishq" - can't defined again
const c = "Tanishq" // Immutable String
