function getDataFromAPI() {

    //This function is going to send value 50 after 3 seconds 




    // Use fetch to grab data from API
    var promise = new Promise((onResolve, onReject) => {
        setTimeout(function () { onResolve(50) }, 3000)
    })
    return promise;

}



var data = getDataFromAPI()
data.then(function (info) {
    console.log(info)
})