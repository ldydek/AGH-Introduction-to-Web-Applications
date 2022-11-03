document.querySelector("#button1").addEventListener('click', on_off);
document.querySelector("#button2").addEventListener('click', counter_button);
let counter = -1;
let value = 0;

function on_off() {
    counter++;
    options = ["WŁĄCZONY", "WYŁĄCZONY"];
    document.querySelector("#button2").innerHTML = options[counter%2];
    document.querySelector("#button2").style.color = "red";
    if (counter % 2 == 1) {
        value = 0;
        document.querySelector("#container > div").innerHTML = value;
    }
}

function counter_button() {
    if (counter % 2 == 0) {
        value++;
        document.querySelector("#container > div").innerHTML = value;
    }
}