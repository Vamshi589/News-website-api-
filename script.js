let key = "4a912289a2b44581b9f8e0de3f576e32";
let cardData = document.querySelector(".cardData")
let searchBar = document.getElementById("searchBar")
let btn = document.getElementById("searchBtn")
let category = document.getElementById("type")
let sports
    =
    document.getElementById("sport")
const getData = async (input) => {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);
    category.innerText = "Search: " + input;
    cardData.innerHTML = "";
    jsonData.articles.forEach((elm) => {
        let divs = document.createElement("div")
        divs.classList.add("card")
        cardData.appendChild(divs)
        divs.innerHTML = `
        <img src="${elm.urlToImage}" alt="">
            <h3>${elm.title}</h3>
            <p>${elm.description}</p>
            `
        divs.addEventListener("click", function () {
            window.open(elm.url)
            I
        })
    })

    searchBar.value = ""
}


window.addEventListener("load", function () {
    getData("India")
})
btn.addEventListener("click", function () {
    let inputValue = searchBar.value
    getData(inputValue)
})


function navItem(newItem) {
    if (newItem == "sport") {
        document.getElementById("sport").style.color = "orangered"
        document.getElementById("tech").style.color = "white"
        document.getElementById("politics").style.color = "white"
    }
    if (newItem == "tech") {
        document.getElementById("sport").style.color = "white"
        document.getElementById("tech").style.color = "orangered"
        document.getElementById("politics").style.color = "white"
    }
    if (newItem == "politics") {
        document.getElementById("sport").style.color = "white"
        document.getElementById("tech").style.color = "white"
        document.getElementById("politics").style.color = "orangered"
    }
    getData(newItem);
}