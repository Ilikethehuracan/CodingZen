var api_key = "1fd967811a0e544378a8d835814e9846"
function check() {
    var cityname = document.getElementById("inp").value
    document.querySelector("#inp").value = ""
    document.querySelector(".temp").innerHTML = "Loading..."
    document.querySelector(".low").innerHTML = "Loading..."
    document.querySelector(".high").innerHTML = "Loading..."
    document.querySelector(".feelslike").innerHTML = "Loading..."
    document.querySelector(".windspeed").innerHTML = "Loading..."
    document.querySelector(".humidity").innerHTML = "Loading..."
    document.querySelector("body").style.cursor = "progress"
    document.querySelector("button").style.cursor = "progress"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=1fd967811a0e544378a8d835814e9846`).then(gotResponse).then(gotFinalResponse)
}
function gotResponse(response) {
    return response.json()
}
function gotFinalResponse(finalResponse) {
    console.log(finalResponse)
    document.querySelector("body").style.cursor = "default"
    document.querySelector("button").style.cursor = "default"
    document.querySelector(".temp").innerHTML = finalResponse.main.temp + " is the temperature for today (in Kelvin)!"
    document.querySelector(".low").innerHTML = finalResponse.main.temp_min + " is the low for today (in Kelvin)!"
    document.querySelector(".high").innerHTML = finalResponse.main.temp_max + " is the high for today (in Kelvin)!"
    document.querySelector(".feelslike").innerHTML = finalResponse.main.feels_like + " is how it feels like today (in Kelvin)!"
    document.querySelector(".windspeed").innerHTML = finalResponse.wind.speed + " is the wind speed for today!"
    document.querySelector(".humidity").innerHTML = finalResponse.main.humidity + "% is the humidity for today!"
}