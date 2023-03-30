document.querySelector("#button").addEventListener('click', showName);

function showName() {
    document.querySelector("#name").textContent = prompt("Twoje imię: ");
}