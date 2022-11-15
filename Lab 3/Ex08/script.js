let myInput = document.querySelector("#passwd");
let secondInput = document.querySelector("#repeat-passwd");
let letters = document.querySelector("#chars");
let specialChar = document.querySelector("#special-char");
let capitalLetter = document.querySelector("#capital-letter");
let digit = document.querySelector("#digit");
let info = document.querySelector("#info > p");
let eyeIcon1 = document.querySelector(".toggle-password1");
let eyeIcon2 = document.querySelector(".toggle-password2");
let ctr1 = 0;
let ctr2 = 0;

myInput.addEventListener("keyup", checking);
myInput.addEventListener("keyup", identity);
secondInput.addEventListener("keyup", identity);
eyeIcon1.addEventListener("click", showPassword1);
eyeIcon2.addEventListener("click", showPassword2);

function checkingLetters() {
    if (myInput.value.length >= 8) {
        letters.classList.remove("invalid");
        letters.classList.add("valid");
    }
    else {
        letters.classList.remove("valid");
        letters.classList.add("invalid");
    }
}

function checkingSpecialChar() {
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
    if (myInput.value.match(specialChars)) {
        specialChar.classList.remove("invalid");
        specialChar.classList.add("valid");
    }
    else {
        specialChar.classList.remove("valid");
        specialChar.classList.add("invalid");
    }
}

function checkingCapitalLetter() {
    let upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {  
        capitalLetter.classList.remove("invalid");
        capitalLetter.classList.add("valid");
    } 
    else {
        capitalLetter.classList.remove("valid");
        capitalLetter.classList.add("invalid");
    }
    console.log(letters.classList);
}

function checkingDigit() {
    let numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {  
        digit.classList.remove("invalid");
        digit.classList.add("valid");
    } 
    else {
        digit.classList.remove("valid");
        digit.classList.add("invalid");
    }
}

function checking() {
    checkingLetters();
    checkingSpecialChar();
    checkingCapitalLetter();
    checkingDigit();
}

function identity() {
    if (myInput.value != secondInput.value) {
        info.innerText = "Hasła nie są identyczne!"
    }
    else {
        info.innerText = "";
    }
}

function showPassword1() {
    if (myInput.type == "password") {
        eyeIcon1.src = "images/slashed-eye.svg";
        myInput.type = "text";
    } else {
        eyeIcon1.src = "images/eye.svg";
        myInput.type = "password";
    }
}

function showPassword2() {
    if (secondInput.type == "password") {
        eyeIcon2.src = "images/slashed-eye.svg";
        secondInput.type = "text";
    } else {
        eyeIcon2.src = "images/eye.svg";
        secondInput.type = "password";
    }
}