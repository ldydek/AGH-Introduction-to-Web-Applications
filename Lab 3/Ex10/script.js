let board = document.querySelector("#board");
let outside = document.querySelector("body");
let info = document.querySelector("#info");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let ball = document.querySelector("#ball");

board.addEventListener("click", move);
outside.addEventListener("click", outsideFunction);

function move(event) {
    let x = event.clientX;
    let y = event.clientY;
    console.log(x);
    console.log(y);
    ball.style.left = (x-25) + "px";
    ball.style.top = (y-25) + "px";
    info.style.display = "none";
    event.stopPropagation();
}

function outsideFunction() {
    info.style.display = "block";
}