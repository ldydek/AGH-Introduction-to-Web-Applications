document.querySelector("#button").addEventListener('click', function1);
let counter = 0;

function function1() {
    images = ["#photo1", "#photo2", "#photo3"];
    document.querySelector(images[counter%3]).style.visibility = "visible";
    document.querySelector(images[(counter+1)%3]).style.visibility = "hidden";
    document.querySelector(images[(counter+2)%3]).style.visibility = "hidden";
    counter++;
}