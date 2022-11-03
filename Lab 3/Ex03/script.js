document.querySelector("#dodaj").addEventListener('click', add);
document.querySelector("#usuń").addEventListener('click', remove);

function add() {
    let children = document.querySelector("#list").childElementCount;
    let node = document.createElement("li");
    let textnode = document.createTextNode("Item-" + (children + 1)); 
    node.appendChild(textnode);
    document.querySelector("#list").appendChild(node);
    console.log(children);
}

function remove() {
    document.querySelector("#list").removeChild(document.querySelector("#list").childNodes[0]);
    console.log(children);
}