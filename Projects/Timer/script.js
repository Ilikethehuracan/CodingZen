var time = prompt("Enter the amount of seconds you want your timer to be! (Only enter a number!)")
$(".btn2").hide()
$(".btn3").hide()
$(".btn1").show()
$("#mp3").hide()

function functionRestart() {
    location.reload()
}
var num = parseInt(time)
document.querySelector(".timer").innerHTML = num
var arr1 = ["red", "orange"]
var i = 0
function background() {
    document.getElementById("body").style.backgroundColor = arr1[i % 2]
    i++
}
function start() {
    num--
    document.querySelector(".timer").innerHTML = num
    if (num <= 0) {
        document.querySelector(".timer").innerHTML = "Finished!";
        setInterval(background, 1000)
        document.getElementById("mp3").play()
        $(".btn1").hide()
        $(".btn2").hide()
        $(".btn3").show()
    }
}
var b = setInterval(start, 1000)

function functionPause() {
    clearInterval(b)
}