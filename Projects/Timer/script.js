var time = prompt("Enter the amount of seconds you want your timer to be! (Only enter a number!)")
$(".btn2").hide()
$(".btn3").hide()
$(".btn1").show()

function functionRestart() {
    location.reload()
}
var num = time
document.querySelector(".timer").innerHTML = num

function start() {
    num--
    document.querySelector(".timer").innerHTML = num
    if (num <= 0) {
        document.querySelector(".timer").innerHTML = "Finished!";
        document.querySelector("#mp3").play();
        $(".btn1").hide()
        $(".btn2").hide()
        $(".btn3").show()
    }
}
setInterval(start, 1000)