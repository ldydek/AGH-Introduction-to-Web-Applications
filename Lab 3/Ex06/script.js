let removeButton = document.querySelectorAll(".remove-button");
let addButton = document.querySelector("#add-button");
let usersList = document.querySelectorAll(".single-user");
let userSection = document.querySelector("#user-section");
let firstUser = usersList[0];

addButton.addEventListener("click", addUser);
for (let i = 0; i < usersList.length; i++) {
    removeButton[i].addEventListener("click", () => {
        userSection.removeChild(usersList[i]);
    });
}

function addUser() {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;

    if (name == "") {
        alert("Podaj imię i nazwisko!");
        return;
    }
    if (!(checkOnlyNumbers(phone) == true && (countLength(phone) == 9 || (countLength(phone) == 12 && getFirstSign(phone) == "+")))) {
        alert("Podaj poprawny numer telefonu!");
        return;
    }
    if (checkName(name) == false) {
        alert("Podaj poprawne imię i nazwisko!")
        return;
    }
    else {
        let newUser = firstUser.cloneNode(true);
        userSection.appendChild(newUser);
        newUser.querySelector("#name-paragraph").innerHTML = name;
        newUser.querySelector("#phone-paragraph").innerHTML = changePhone(phone);

        let usersList = document.querySelectorAll(".single-user");

        newUser.querySelector(".remove-button").addEventListener("click", () => {
            userSection.removeChild(usersList[usersList.length - 1]);
        });

        document.querySelector("#name").value = "";
        document.querySelector("#phone").value = "";
    }
}

// deleting white spaces in a string
function deleteWhiteSpaces(string) {
    return string.replace(/\s/g, '');
}

function countLength(phone) {
    phone = deleteWhiteSpaces(phone);
    return phone.length;
}

function getFirstSign(phone) {
    return phone[0];
}

// adding spaces between digits in a phone number to display it nicely on the board
function changePhone(phone) {
    phone = deleteWhiteSpaces(phone);
    let prettyPhone = "";
    for (let counter = 0; counter < phone.length; counter++) {
        if (counter % 3 == 0) {
            prettyPhone += " ";
        }
        prettyPhone += phone[counter];
    }
    prettyPhone.trimStart();
    return prettyPhone;
}

function checkOnlyNumbers(string) {
    string = deleteWhiteSpaces(string);
    if (getFirstSign(string) == "+") {
        string = string.substring(1);
    }
    return /^[0-9]+$/.test(string);
}

function checkOnlyLetters(string) {
    return /^[a-ząćęłńóśźżA-ZĄĆĘŁŃÓŚŹŻ]+$/.test(string);
}

function bigLetter(string) {
    return string[0].toUpperCase() == string[0];
}

// using regex here and in some other functions above as well
function checkName(string) {
    return /^[ ]*[A-ZŁŚŹŻ][a-ząćęłńóśźż]*[ ]*[A-ZŁŚŹŻ][a-ząćęłńóśźż]*(-[A-ZŁŚŹŻ][a-ząćęłńóśźż]*){0,1}[ ]*$/.test(string);
}