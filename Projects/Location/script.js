var latitude = 0
var longitude = 0;
$(".maps").hide()
document.getElementById("body").style.overflowY = "hidden"
$(".hidemap").hide()
$(".showmap").hide()
alert("This is Moordinates (My Coordinates)! You can get to know your own coordinates (latitude and longitude). Just click the button that reads, ''Show my location!,'' and you will get to know your coordinates! You also get an exclusive map which shows your location. This is a completely safe website, so make sure to turn your location on for your browser. Thank you for choosing Moordinates. More features are coming soon!")
console.log("This is Moordinates (My Coordinates)! You can get to know your own coordinates (latitude and longitude). Just click the button that reads, ''Show my location!,'' and you will get to know your coordinates! You also get an exclusive map which shows your location. This is a completely safe website, so make sure to turn your location on for your browser. Thank you for choosing Moordinates. More features are coming soon!")

function hidemap() {
    $(".maps").slideUp(2000)
    $(".hidemap").hide()
    $(".showmap").show()
}
function showmap() {
    $(".maps").slideDown(2000)
    $(".hidemap").show()
    $(".showmap").hide()
}

function ShowLocation() {
    alert("This may take up to a minute to load.")
    $(".maps").hide()
    $(".hidemap").hide()
    document.getElementById("lat").innerHTML = "Loading..."
    document.getElementById("long").innerHTML = "Loading..."
    console.log("Loading...")
    document.getElementById("body").style.cursor = "progress"
    document.querySelector(".location").style.cursor = "progress"
    navigator.geolocation.getCurrentPosition(function (data) {
        console.log(data)
        document.getElementById("lat").innerHTML = "Latitude: " + data.coords.latitude
        document.getElementById("long").innerHTML = "Longitude: " + data.coords.longitude
        latitude = data.coords.latitude
        longitude = data.coords.longitude
        console.log("Loaded!")
        document.getElementById("map").src = `http://maps.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`
        document.getElementById("body").style.cursor = "default"
        document.querySelector(".location").style.cursor = "default"
        $(".maps").slideDown(2000)
        $(".hidemap").show()
        document.getElementById("body").style.overflowY = "visible"
    })
}