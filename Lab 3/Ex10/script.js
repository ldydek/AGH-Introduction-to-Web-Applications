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
    let boardDimensions = board.getBoundingClientRect();

    // window.innerHeight and window.innerWidth keep current viewport dimensions
    let ballHorizontalPosition = Math.max((x - (window.innerWidth - boardDimensions.width) / 2 - ballWidth), 0);
    ballHorizontalPosition = Math.min(ballHorizontalPosition, boardDimensions.width - 2 * (ballWidth + borderThickness));

    let ballVerticalPosition = Math.max((y - (window.innerHeight - boardDimensions.height) / 2 - ballWidth), 0);
    ballVerticalPosition = Math.min(ballVerticalPosition, boardDimensions.height - 2 * (ballWidth + borderThickness));

    ball.style.left = ballHorizontalPosition / (boardDimensions.width - 2*borderThickness) * 100 + "%";
    ball.style.top = ballVerticalPosition / (boardDimensions.height - 2*borderThickness) * 100 + "%";
    info.style.display = "none";
    event.stopPropagation();
}

function displayWarning(event) {
    let viewPortDimensions = outside.getBoundingClientRect();
    info.style.display = "block";
    info.style.left = event.clientX / viewPortDimensions.width * 100 + "%";
    info.style.top = event.clientY / viewPortDimensions.height * 100 + "%";
}