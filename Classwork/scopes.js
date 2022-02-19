var ayush = 10
{
    let temp = 20
    {
        //  console.log(temp)
    }
}
// If a variable is created using var keyword in a block (curly braces), you can still access it outside of the block
// If a variable is created using let keyword in a block (curly braces), you can still access it outside of the block

var a = 10
var b = 20
var temp = a
a = b
b = temp
console.log(a)
console.log(b)