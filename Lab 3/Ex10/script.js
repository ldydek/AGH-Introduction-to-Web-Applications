let board = document.querySelector("#board");
let outside = document.querySelector("body");
let info = document.querySelector("#info");
let warning1 = document.querySelector("#p1");
let warning2 = document.querySelector("#p2");
let ball = document.querySelector("#ball");
let ballWidth = 25;
let borderThickness = 5;

board.addEventListener("click", move);
outside.addEventListener("click", displayWarning);

function move(event) {
    let x = event.clientX;
    let y = event.clientY;
    let viewPortDimensions = outside.getBoundingClientRect();
    let boardDimensions = board.getBoundingClientRect();

    let ballHorizontalPosition =  Math.max((x - (viewPortDimensions.width - boardDimensions.width)/2 - ballWidth), 0);
    ballHorizontalPosition = Math.min(ballHorizontalPosition, boardDimensions.width - 2*(ballWidth + borderThickness));

    let ballVerticalPosition =  Math.max((y - (viewPortDimensions.height - boardDimensions.height)/2 - ballWidth), 0);
    ballVerticalPosition = Math.min(ballVerticalPosition, boardDimensions.height - 2*(ballWidth + borderThickness));

    ball.style.left =  ballHorizontalPosition + "px";
    ball.style.top = ballVerticalPosition + "px";
    info.style.display = "none";
    event.stopPropagation();
}

function displayWarning(event) {
    info.style.display = "block";
    info.style.left = event.clientX + "px";
    info.style.top = event.clientY + "px";
}