let books = [
    { name: "The Losers Club", author: "Andrew Clements", imgsrc: "https://images-na.ssl-images-amazon.com/images/I/51+5aOtlM6L._SX339_BO1,204,203,200_.jpg", price: "$7.99", link: "https://www.amazon.com/Losers-Club-Andrew-Clements/dp/039955758X/ref=sr_1_1?crid=2WSDPKZG84W1X&qid=1645287129&sprefix=the+losers+club%2Caps%2C96&sr=8-1" },
    { name: "Slacker", author: "Gordon Korman", imgsrc: "https://images-na.ssl-images-amazon.com/images/I/51UMz6PqBUL._SX342_BO1,204,203,200_.jpg", price: "$5.59", link: "https://www.amazon.com/Slacker-Gordon-Korman/dp/0545823161/ref=sr_1_1?crid=2GL45VPEEI57T&qid=1645287284&sprefix=slacker+book%2Caps%2C90&sr=8-1" },
    { name: "Level 13 (A Slacker Novel)", author: "Gordon Korman", imgsrc: "https://images-na.ssl-images-amazon.com/images/I/51Aqy+HYUpL._SX342_BO1,204,203,200_.jpg", price: "$7.99", link: "https://www.amazon.com/Level-Slacker-Novel-Gordon-Korman/dp/1338286218/ref=sr_1_2?crid=2GL45VPEEI57T&qid=1645287284&sprefix=slacker+book%2Caps%2C90&sr=8-2" },
    { name: "Diary of a Wimpy Kid Book 16", author: "Jeff Kinney", imgsrc: "https://images-na.ssl-images-amazon.com/images/I/51Ua3JTN8iS._SX338_BO1,204,203,200_.jpg", price: "$7.49", link: "https://www.amazon.com/Big-Shot-Diary-Wimpy-Book/dp/1419749153/ref=sr_1_3?crid=24B2WML7ILG9D&qid=1645291104&sprefix=kids+book%2Caps%2C136&sr=8-3" }
]
for (let i = 0; i < books.length; i++) {
    document.getElementById("holder").innerHTML += `
    <div class="card mb-4 shadow-sm">
    <h1 class="display-1">${books[i].name}</h1>
<img height="400px" width="400px" class="bookimg" src="${books[i].imgsrc}"
    <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <a href="${books[i].link}" target=_blank><button type="button" class="btn btn-sm btn-outline-secondary">Buy
                        now for ${books[i].price}!</button></a>
            </div>
        </div>
    </div>
</div>`
}