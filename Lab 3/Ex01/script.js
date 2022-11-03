document.querySelector("#button").addEventListener('click', function() {
    let imie = prompt("Twoje imię: ");
    document.querySelector("#section").textContent = imie;
});