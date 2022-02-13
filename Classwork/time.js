function printName() {
    console.log("Krish")
}


function printAge() {
    console.log(11);
}

function printHobby() {
    console.log("car enthusiasm")
}

/*



To delay any function in javascript we have something called 
setTimeout


Parameters in this function are the name of the function and the time in milliseconds after which you want your function to be executed





setTimeout(printName, 10000);
setTimeout(printAge, 5000);
setTimeout(printHobby, 3000);

*/


/* 

setInterval function is used to delay the function call and it will keep executing the function for infinite number of times after the specified duration.

We do have 2 parameter, 1st parameter is the name of the function, 2nd parameter is the time interval

It is like an infinite loop, but we have control over the time



setInterval(printName, 2000);

*/

var num = -1
function timer() {
    num++
    console.log(num)
}
setInterval(timer, 1000)



/*
var arr = [3,105, 4,1,5,9,200]



console.log(arr)
arr.sort(function(a,b){
  return a-b //ascending order
})
console.log(arr)
//For descending order
arr.sort(function(a,b){
  return b-a 
})
console.log(arr)
*/



var marks = [{ subject: "maths", marks: 98 }, { subject: "coding", marks: 100 }, { subject: "science", marks: 97 }]


marks.sort(function (a, b) {
    return a.subject - b.subject
})
console.log(marks)