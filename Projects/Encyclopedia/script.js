function See() {
    var month = document.getElementById("inp2").value
    var day = document.getElementById("inp1").value
    var maxDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    fetch(`https://history.muffinlabs.com/date/${month}/${day}`).then(response1).then(responseFinal)
    if (day > maxDays[month - 1] || day < 0) {
        alert("This is not a valid date!")
    }
    if (month > 12) {
        alert("The month number is more than 12... please enter a valid month!")
    }
    document.getElementById("inp2").value = " "
    document.getElementById("inp1").value = " "
}
function response1(data) {
    return data.json()
}
function responseFinal(final) {
    document.getElementById("para1").innerHTML = final.data.Events[0].year + " - " + final.data.Events[0].text + "<br>"
    for (var i = 1; i < final.data.Events.length; i++) {
        document.getElementById("para1").innerHTML += final.data.Events[i].year + " - " + final.data.Events[i].text + "<br>"
    }

    document.querySelector("#births").addEventListener('click', function () {
        document.getElementById("para1").innerHTML = final.data.Births[0].year + " - " + final.data.Births[0].text + "<br>"
        for (var i = 1; i < final.data.Births.length; i++) {
            document.getElementById("para1").innerHTML += final.data.Births[i].year + " - " + final.data.Births[i].text + "<br>"
        }
    })

    document.querySelector("#deaths").addEventListener('click', function () {
        document.getElementById("para1").innerHTML = final.data.Deaths[0].year + " - " + final.data.Deaths[0].text + "<br>"
        for (var i = 1; i < final.data.Deaths.length; i++) {
            document.getElementById("para1").innerHTML += final.data.Deaths[i].year + " - " + final.data.Deaths[i].text + "<br>"
        }
    })


    document.querySelector("#events").addEventListener('click', function () {
        document.getElementById("para1").innerHTML = final.data.Events[0].year + " - " + final.data.Events[0].text + "<br>"
        for (var i = 1; i < final.data.Events.length; i++) {
            document.getElementById("para1").innerHTML += final.data.Events[i].year + " - " + final.data.Events[i].text + "<br>"
        }
    })

    console.log(final.data)
}