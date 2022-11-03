document.querySelector("#button").addEventListener('click', function() {
    let imie = prompt("Twoje imię: ");
    buttonContent = imie;
    document.querySelector("#section").textContent = buttonContent;
});