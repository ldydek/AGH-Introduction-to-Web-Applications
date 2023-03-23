document.querySelector("#add-button").addEventListener('click', addItem);
document.querySelector("#remove-button").addEventListener('click', removeItem);
const shoppingList = document.querySelector("#shopping-list");
const auxNewShoppingListItem = document.querySelector(".shopping-list-element").cloneNode(true);
// it is used only if shopping list is empty

function addItem() {
    let newShoppingListItem = document.querySelector(".shopping-list-element");
    if (newShoppingListItem != null) {
        newShoppingListItem = newShoppingListItem.cloneNode(true);
    } else {
        newShoppingListItem = auxNewShoppingListItem;
    }

    let header = newShoppingListItem.querySelector(".shopping-list-element > h1");
    header.innerText = "";

    let children = shoppingList.childElementCount;
    let headerText = document.createTextNode("Item-" + (children + 1));
    header.appendChild(headerText);

    shoppingList.appendChild(newShoppingListItem);
}

function removeItem() {
    let shoppingListItem = document.querySelector("li");
    if (shoppingListItem != null) {
        shoppingList.removeChild(shoppingListItem);
    }
}