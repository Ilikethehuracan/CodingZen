function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function pi() {
    return Math.PI
}

function circle(radius) {
    return Math.PI * radius * radius
}

function triangle(base, height) {
    return base * height * 0.5
}

function rectangle(length, width) {
    return length * width
}
function square(side) {
    return side * side
}

module.exports = { add, subtract, multiply, divide, pi, circle, triangle, rectangle, square }