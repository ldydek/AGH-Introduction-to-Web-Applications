let removeButton = document.querySelectorAll(".remove-button");
let addButton = document.querySelector("#add");
let usersList = document.querySelectorAll(".single-user");
let phone1;
let phone2;

addButton.addEventListener("click", addUser);
for (let i=0; i<usersList.length;  i++) {
    removeButton[i].addEventListener("click", () => {
        document.querySelector("#user-section").removeChild(usersList[i]);
    });
}

function addUser() {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;

    if (name == "") {
        alert("Podaj imię i nazwisko!");
        return;
    }
    if (!(onlyNumbers(phone) == true && (myLength(phone) == 9 || (myLength(phone) == 12 && firstSign(phone) == "+")))) {
        alert("Podaj poprawny numer telefonu!");
        return;
    }
    if (checkName(name) == false) {
        alert("Podaj poprawne imię i nazwisko!")
        return;
    }
    else {
        let userSection = document.querySelector("#user-section");
        let singleUser = document.createElement("section");
        let removeData = document.createElement("div");
        let data = document.createElement("div");
        let removeButton = document.createElement("button");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");

        singleUser.className = "single-user";
        data.className = "data";
        removeData.className = "remove-data";
        removeButton.className = "remove-button";
        removeButton.innerHTML = "<i class=\"fa fa-trash\"></i>";

        userSection.appendChild(singleUser);
        singleUser.appendChild(data);
        singleUser.appendChild(removeData);
        removeData.appendChild(removeButton);
        data.appendChild(p1);
        data.appendChild(p2);
        p1.innerHTML = name;
        p2.innerHTML = changePhone(phone);

        usersList = document.querySelectorAll(".single-user");

        removeButton.addEventListener("click", () => {
            document.querySelector("#user-section").removeChild(usersList[usersList.length-1]);
            usersList = document.querySelectorAll(".single-user");
        });

        document.querySelector("#name").value = "";
        document.querySelector("#phone").value = "";
    }
}

function myLength(phone) {
    ctr = phone.length
    for (let i=0; i<phone.length; i++) {
        if (phone[i] == " ") {
            ctr -= 1;
        }
    }
    return ctr;
}

function firstSign(phone) {
    ctr = 0
    while (phone[ctr] == " ") {
        ctr += 1
    }
    return phone[ctr];
}

function changePhone(phone) {
    phone1 = "";
    let ctr = 0
    for (let i=0; i<phone.length; i++) {
        if (phone[i] != " ") {
            phone1 += phone[i];
            ctr += 1
        }
        if (ctr % 3 == 0) {
            phone1 += " ";
        }
    }
    return phone1;
}

function onlyNumbers(str) {
    phone2 = "";
    for (let i=0; i<str.length; i++) {
        if (str[i] != " ") {
            phone2 += str[i];
        }
    }
    if (firstSign(phone2) == "+") {
        phone2 = phone2.substring(1);
    }
    return /^[0-9]+$/.test(phone2);
}

function onlyLetters(str) {
    return /^[a-żA-Ż]+$/.test(str);
}

function bigLetter(str) {
    return str[0].toUpperCase() == str[0]
}

function checkName(str) {
    const arr = str.split(' ');
    if (arr.length != 2) {
        return false;
    }
    for (let i=0; i<2; i++) {
        if (bigLetter(arr[i]) == false || onlyLetters(arr[0]) == false) {
            return false;
        }
    }
    if (onlyLetters(arr[1]) == false && arr[1].split("-").length - 1 == 1) {
        return findSign(arr[1]);
    }
    else if (onlyLetters(arr[1]) == true) {
        return true;
    }
    else {
        return false;
    }
}

function findSign(str) {
    for (let i=0; i<str.length; i++) {
        if (str[i] == '-') {
            if (i + 1 >= str.length || str[i+1].toUpperCase() != str[i+1]) {
                return false;
            }
        }
    }
    return true;
}