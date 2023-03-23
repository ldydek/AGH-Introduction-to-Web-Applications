document.querySelector("#button1").addEventListener('click', onOff);
document.querySelector("#button2").addEventListener('click', count);
let value = -1;
let counter = 0;
let counterContainer = document.querySelector("#counter-container");
let switchButton = document.querySelector("#button1");
let counterButton = document.querySelector("#button2");

function onOff() {
    value++;
    let switchButtonOptions = ["WYŁĄCZ", "URUCHOM"];
    let counterButtonOptions = ["WŁĄCZONY", "WYŁĄCZONY"];
    switchButton.innerHTML = switchButtonOptions[value % 2] + " PRZYCISK";
    counterButton.innerHTML = counterButtonOptions[value % 2];
    if (value % 2 == 1) {
        counter = 0;
        counterContainer.innerHTML = counter;
    }
}

function count() {
    if (value % 2 == 0) {
        counter++;
        counterContainer.innerHTML = counter;
    }
}