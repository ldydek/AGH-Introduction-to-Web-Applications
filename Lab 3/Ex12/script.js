let lives;
let score = 6;
let heartContainer = document.querySelector('#heart-container');
let board = document.querySelector("body");
let nickname;
let nicknameContainer = document.querySelector("#nickname-container");
let points = document.querySelector("#score > p");

askForNickname();

function askForNickname() {
    let start = document.createElement("div");
    let statement = document.createElement("p");
    let nick = document.createElement("input");
    let button = document.createElement("button");
    let skull = document.createElement("img");
    start.id = "start";
    statement.innerText = "Nickname please...";
    skull.src = "images/skull.svg";
    button.innerText = "PLAY!"
    start.appendChild(statement);
    start.appendChild(skull);
    start.appendChild(nick);
    start.appendChild(button);
    board.appendChild(start);

    points.innerHTML = 0;

    button.addEventListener("click", () => {
        let input = document.querySelector("#start > input").value;
        if (input !== "") {
            nickname = input;
            nicknameContainer.innerHTML = input;
            board.removeChild(start);
            run();
        }
    })
}


function run() {
    lives = 3;
    board.style.cursor = "url(\"images/thepost.png\"), pointer";
    board.addEventListener("click", pointsManagement);

    spawnHearts();

    let game = setInterval(() => {
        let zombie = document.createElement("div");
        zombie.className = "zombie";

        let minHeight = 1;
        let maxHeight = 30;
        let bottom = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        zombie.style.bottom = bottom + "%";
        zombie.style.zIndex = Math.floor(Math.random() * 1000);

        let size = 0.5 + Math.random() * 1.2;
        zombie.style.transform = "scale(" + size + ")";

        let minSpeed = 1;
        let maxSpeed = 10;
        let speed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1) + minSpeed);

        zombie.style.animation = "walk " + speed + "s 0s 1 linear, move 0.5s 0s infinite steps(9)";

        board.appendChild(zombie);

        zombie.addEventListener("animationend", (event) => {
            if (event.animationName === "walk") {
                if (lives > 0) {
                    let heart = document.querySelector('#heart-container :nth-child(' + lives + ')');
                    lives--;
                    heart.style.opacity = '0';
                }
                if (lives == 0) {
                    stop(game);
                }
            }
        })
    }, 1000);
}

function pointsManagement(event) {
    if (lives > 0) {
        if (event.target.classList.contains("zombie")) {
            score += 12;
            event.target.remove();
        }
        else {
            score -= 6;
        }
    }
    points.innerText = score;
}

function stop(game) {
    let zombies = document.querySelectorAll(".zombie");
    for (let zombie of zombies) {
        board.removeChild(zombie);
    }
    clearInterval(game);
    gameOver();
}

async function gameOver() {
    await addDataToServer();

    board.style.cursor = "default";
    let finish = document.createElement("div");
    let scoreDisplay = document.createElement("p");
    let scoreInfo = document.createElement("p");
    let newGameButton = document.createElement("button");
    scoreInfo.innerText = 'Best scores below:'
    newGameButton.innerText = "ONE MORE TIME?"
    finish.appendChild(scoreDisplay);
    finish.appendChild(newGameButton);
    finish.appendChild(scoreInfo);
    board.appendChild(finish);
    finish.id = "finish";
    scoreDisplay.innerText = "You scored " + score + " points...";

    const request = await fetch("https://jsonblob.com/api/jsonBlob/1115656116142096384");
    let scores = await request.json();

    let counter = 1;

    for (let score of scores.people) {
        let scoreContainer = document.createElement("div");
        scoreContainer.className = "score-container";
        let nr = document.createElement("p");
        let nick = document.createElement("p");
        let val = document.createElement("p");
        let date = document.createElement("p");
        nr.innerText = counter + '. ';
        nick.innerText = score.nickname;
        val.innerText = score.points;
        date.innerText = score.date;

        scoreContainer.appendChild(nr);
        scoreContainer.appendChild(nick);
        scoreContainer.appendChild(val);
        scoreContainer.appendChild(date);
        finish.appendChild(scoreContainer);

        counter++;
    }

    newGameButton.addEventListener('click', function () {
        board.removeChild(finish);
        score = 6;
        nicknameContainer.innerHTML = '';
        board.removeEventListener("click", pointsManagement);
        askForNickname();
    });
}

function spawnHearts() {
    for (let i = 1; i <= lives; i++) {
        let heart = document.querySelector('#heart-container :nth-child(' + i + ')');
        heart.style.opacity = 1;
    }
}

async function addDataToServer() {
    // receiving data
    const request = await fetch("https://jsonblob.com/api/jsonBlob/1115656116142096384");
    let scores = await request.json();
    const newScore = {
        nickname: nickname,
        points: score.toString(),
        date: new Date().toLocaleDateString()
    };

    scores.people.push(newScore);
    scores.people.sort((a, b) => {
        return b.points - a.points;
    })
    scores = { people: scores.people.slice(0, 7) };

    scores = JSON.stringify(scores);

    // sending new data
    const response = await fetch("https://jsonblob.com/api/jsonBlob/1115656116142096384", {
        method: "PUT",
        body: scores,
        headers: {
            "Content-Type": "application/json",
            "Location": "https://jsonblob.com/api/jsonBlob/1115656116142096384",
            "Transfer-Encoding": "chunked"
        }
    });
    return scores;
}