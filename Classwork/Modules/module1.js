var password = "password"
function character(sentence) {
    return sentence.length
}


function spaces(sentence) {
    let count = 0
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == " ") {
            count++
        }
    }
    return count
}
module.exports = { spaces, character, password }