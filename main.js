let comicData;
let submit = document.getElementById("submit");
let url = "https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json";
let request = new XMLHttpRequest();

function loadData() {
    request.open("GET", url, true);
    request.onload = loadComplete;
    request.send();
}

function loadComplete() {
    comicData = JSON.parse(this.responseText);
    console.log(comicData);
    document.getElementById("title").innerHTML = comicData.title;
    document.getElementById("comic").src = comicData.img;
    document.getElementById("altText").innerHTML = comicData.alt;
    document.getElementById("published").innerHTML = "Published "+ comicData.month +"-"+ comicData.day +"-"+ comicData.year;
}

loadData();

function submitNumber() {
    console.log("Submit test");
    let comicNumber = document.getElementById("input").value;

    if (comicNumber <= comicData.num){
        console.log("Valid number entered");
        url = "https://cors-anywhere.herokuapp.com/http://xkcd.com/"+comicNumber+"/info.0.json"
        loadData();
    }
    else if (comicNumber > comicData.num){
        console.log ("Number entered is too high.");
        throw{ name:"ComicNumberTooHigh", message:"The comic number entered is too high, please enter a lower number."};
    }

}