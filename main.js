let comicData;
let submit = document.getElementById("submit");

function loadData() {
    let url = "https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json";
    let request = new XMLHttpRequest();

    request.open("GET", url, true);
    request.onload = loadComplete;
    request.send();
}

function loadComplete() {
    comicData = JSON.parse(this.responseText);
    console.log(comicData);
    document.getElementById("comic").src = comicData.img;
    document.getElementById("altText").innerHTML = comicData.alt;
    document.getElementById("title").innerHTML = comicData.title;
    document.getElementById("published").innerHTML = "Published "+ comicData.month +"-"+ comicData.day +"-"+ comicData.year;
}

loadData();


function submitNumber() {
    let comicNumber = document.getElementById("input").value;
    console.log("Submit test");

    if (comicNumber <= comicData.num){
        console.log("Valid number entered")
    }
    else if (comicNumber > comicData.num){
        console.log ("Number entered is too high.");
    }

}