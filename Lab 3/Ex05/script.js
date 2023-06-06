let one = document.querySelector("#outer-div");
let two = document.querySelector("#middle-div");
let three = document.querySelector("#inner-div");
let start_stop = document.querySelector("#prop-switch");
let counter = document.querySelector("#counter");
let reset = document.querySelector("#reset");
let value = 0;
let propagation = 0;
let words = ["START", "STOP"];
let statements = ["nacisnąłeś niebieski o wartości 1", "nacisnąłeś czerwony o wartości 2", "nacisnąłeś żółty o wartości 5"];
let statementsPlace = document.querySelectorAll("body > p");
let info = document.querySelector("#info");
let propagationOrderButton = document.querySelector("#change-propagation");
let propagationLogicValue = false;

one.addEventListener("click", clickOne, propagationLogicValue);
two.addEventListener("click", clickTwo, propagationLogicValue);
three.addEventListener("click", clickThree, propagationLogicValue);
start_stop.addEventListener("click", clickStartStop);
reset.addEventListener("click", resetScore);
propagationOrderButton.addEventListener("click", changePropagation);

function clickOne(event) {
    value++;
    counter.innerText = value;
    writeInfo(0);
    eventService();
    if (propagation == 0) {
        event.stopPropagation();
    }
}

function clickTwo(event) {
    value += 2;
    counter.innerText = value;
    writeInfo(1);
    eventService();
    if (propagation == 0) {
        event.stopPropagation();
    }
}

function clickThree(event) {
    value += 5;
    counter.innerText = value;
    writeInfo(2);
    eventService();
    if (propagation == 0) {
        event.stopPropagation();
    }
}

// shows text info which button was clicked
function writeInfo(index) {
    let text = document.createElement("p");
    text.innerHTML = statements[index];
    info.appendChild(text);
}

function clickStartStop() {
    propagation = ++propagation % 2;
    start_stop.innerText = words[propagation];
}

// resets score and clears all text info 
function resetScore() {
    value = 0;
    counter.innerText = 0;
    two.style.backgroundColor = "red";
    three.style.backgroundColor = "yellow";
    two.addEventListener("click", clickTwo);
    three.addEventListener("click", clickThree);
    info.replaceChildren();
}

function eventService() {
    if (value > 50) {
        three.removeEventListener("click", clickThree, propagationLogicValue);
        three.style.backgroundColor = "dimgrey";
    }
    else if (value > 30) {
        two.removeEventListener("click", clickTwo, propagationLogicValue);
        two.style.backgroundColor = "darkgrey";
    }
}

function changePropagation() {
    one.removeEventListener("click", clickOne, propagationLogicValue);
    two.removeEventListener("click", clickTwo, propagationLogicValue);
    three.removeEventListener("click", clickThree, propagationLogicValue);
    propagationLogicValue = !propagationLogicValue;
    one.addEventListener("click", clickOne, propagationLogicValue);
    if (value <= 30) {
        two.addEventListener("click", clickTwo, propagationLogicValue);
    }
    if (value <= 50) {
        three.addEventListener("click", clickThree, propagationLogicValue);
    }
}