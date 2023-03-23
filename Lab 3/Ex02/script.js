document.querySelector("#button").addEventListener('click', changePhoto);
let counter = 0;
let images = ["#photo1", "#photo2", "#photo3"];

function changePhoto() {
    document.querySelector(images[counter % 3]).style.display = "block";
    document.querySelector(images[(counter + 1) % 3]).style.display = "none";
    document.querySelector(images[(counter + 2) % 3]).style.display = "none";
    counter++;
}