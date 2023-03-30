let firstInput = document.querySelector("#passwd");
let secondInput = document.querySelector("#repeat-passwd");
let letters = document.querySelector("#chars");
let specialChar = document.querySelector("#special-char");
let capitalLetter = document.querySelector("#capital-letter");
let digit = document.querySelector("#digit");
let info = document.querySelector("#info > p");
let eyeIcon1 = document.querySelector(".toggle-password1");
let eyeIcon2 = document.querySelector(".toggle-password2");
let submitButton = document.querySelector("#submit-button");

firstInput.addEventListener("keyup", checkingAllConditions);
secondInput.addEventListener("keyup", submitButtonHandler);
eyeIcon1.addEventListener("click", () => { showPassword(eyeIcon1, firstInput) });
eyeIcon2.addEventListener("click", () => { showPassword(eyeIcon2, secondInput) });
submitButton.addEventListener("click", checkIdentity);
submitButton.disabled = true;

function checkingLetters() {
    if (firstInput.value.length >= 8) {
        changeFromRedToGreen(letters);
    }
    else {
        changeFromGreenToRed(letters);
    }
}

function checkingSpecialChars() {
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
    if (firstInput.value.match(specialChars)) {
        changeFromRedToGreen(specialChar);
    }
    else {
        changeFromGreenToRed(specialChar);
    }
}

function checkingCapitalLetter() {
    let upperCaseLetters = /[A-Z]/g;
    if (firstInput.value.match(upperCaseLetters)) {
        changeFromRedToGreen(capitalLetter);
    }
    else {
        changeFromGreenToRed(capitalLetter);
    }
}

function checkingDigit() {
    let numbers = /[0-9]/g;
    if (firstInput.value.match(numbers)) {
        changeFromRedToGreen(digit);
    }
    else {
        changeFromGreenToRed(digit);
    }
}

// checking all conditions here
function checkingAllConditions() {
    checkingLetters();
    checkingSpecialChars();
    checkingCapitalLetter();
    checkingDigit();
}

// checking whether both inputs have the same string
function checkIdentity() {
    if (firstInput.value != secondInput.value) {
        info.innerText = "Hasła nie są identyczne!"
    }
    else {
        info.innerText = "";
    }
}

function showPassword(eyeIconType, inputType) {
    if (inputType.type == "password") {
        eyeIconType.src = "images/slashed-eye.svg";
        inputType.type = "text";
    } else {
        eyeIconType.src = "images/eye.svg";
        inputType.type = "password";
    }
}

// disabling or enabling submit button if necessary
function submitButtonHandler() {
    if (firstInput.value.length != 0 && secondInput.value.length != 0) {
        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}

// changing styling classes of a certain password requirement from red to green
function changeFromRedToGreen(requirement) {
    requirement.classList.remove("invalid");
    requirement.classList.add("valid");
}

// changing styling classes of a certain password requirement from green to red
function changeFromGreenToRed(requirement) {
    requirement.classList.remove("valid");
    requirement.classList.add("invalid");
}