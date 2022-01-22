var api_key = "6335ab3930970f405e5bed398895a08c"
function check() {
    var cityname = document.getElementById("inp").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6335ab3930970f405e5bed398895a08c`).then(gotResponse).then(gotFinalResponse)
}
function gotResponse(response) {
    return response.json()
}
function gotFinalResponse(finalResponse) {
    console.log(finalResponse)
    alert(finalResponse.main.temp_min + " Is the minimum temperature in Kelvin!")
}