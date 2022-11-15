const people = [
    {
        name: "Melisa Mcbridge",
        job: "Product Manager",
        image: "images/photo1.jpg",
        text: "Nulla fermentum, diam eu scelerisque facilisis, eros orci porta justo, nec varius enim lectus eu massa." +
        "Nunc hendrerit tortor non tellus tristique feugiat. Donec maximus a neque a facilisis. Morbi non mattis magna." +
        "Proin a ullamcorper leo, non varius metus. Vestibulum a finibus purus, nec commodo turpis. Sed ut justo eu purus" +
        "faucibus fringilla. Vestibulum lacinia ante dolor, eu sollicitudin arcu gravida sed. Cras commodo ante vestibulum nisl laoreet," +
        "quis cursus lacus aliquet."
    },
    {
        name: "Tessa Bailey",
        job: "Web Developer",
        image: "images/photo2.jpg",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda atque dignissimos ea eius," +
        "fugiat laudantium modi quaerat reiciendis, sapiente sit soluta. Ad alias et laborum placeat possimus quasi" +
        "totam voluptatem voluptatum? Alias aperiam blanditiis commodi consequatur consequuntur cumque cupiditate" +
        "deleniti distinctio dolorem eaque enim eos et ex fuga hic, impedit in laboriosam minus molestiae mollitia" +
        "nam nesciunt."
    },
    {
        name: "Paul Molongo",
        job: "Web Designer",
        image: "images/photo3.jpg",
        text: "Vestibulum tincidunt mollis scelerisque. Nam sed enim tortor. Fusce eu nunc ut tortor tempus porttitor." +
        "Fusce mauris erat, gravida sed velit sed, scelerisque vehicula ex. Cras sit amet lacus justo. Aenean fringilla" +
        "gravida lorem a interdum. Nulla diam metus, consectetur eu elementum quis, congue quis felis. Morbi feugiat porttitor" +
        "leo eu fringilla. Vestibulum in malesuada ex. In ultrices, risus sed tempus pretium, diam quam commodo ex, vitae elementum" +
        "est dui et ante."
    },
    {
        name: "Liyah Webber",
        job: "The Boss",
        image: "images/photo4.jpg",
        text: "Sed viverra risus eget eleifend pretium. Cras ullamcorper eu erat congue convallis. Vivamus luctus metus nec gravida molestie." +
        "Donec semper purus sit amet purus cursus gravida. Donec eleifend vel nisi id pulvinar. Mauris facilisis elit enim, sit" +
        "amet pretium nisi gravida quis. Proin maximus sollicitudin purus. Fusce quis pellentesque ligula. Vestibulum tristique" +
        "eleifend tempor. Pellentesque sed scelerisque lectus, vel dictum tellus. Phasellus efficitur ultricies ultricies."
    }
]
let counter = 0;
const button = document.querySelectorAll("button");
const name = document.querySelector("#name");
const job = document.querySelector("#job");
const decription = document.querySelector("main > p");
const img = document.querySelector("#image-container > div > img");
const imgBorder = document.querySelector("#image-container > div");
button[0].addEventListener("click", leftButton);
button[1].addEventListener("click", rightButton);
button[2].addEventListener("click", bottomButton);


function leftButton() {
    imgBorder.classList.remove("animation-left2");
    img.classList.remove("animation-left2");
    decription.classList.remove("animation-left2");
    name.classList.remove("animation-left2");
    job.classList.remove("animation-left2");
    imgBorder.classList.remove("animation-right2");
    img.classList.remove("animation-right2");
    decription.classList.remove("animation-right2");
    name.classList.remove("animation-right2");
    job.classList.remove("animation-right2");
    counter = (people.length + counter-1) % people.length;
    changeData(counter);
    imgBorder.classList.add("animation-right2");
    img.classList.add("animation-right2");
    decription.classList.add("animation-right2");
    name.classList.add("animation-right2");
    job.classList.add("animation-right2");
}

function rightButton() {
    imgBorder.classList.remove("animation-left2");
    img.classList.remove("animation-left2");
    decription.classList.remove("animation-left2");
    name.classList.remove("animation-left2");
    job.classList.remove("animation-left2");
    imgBorder.classList.remove("animation-right2");
    img.classList.remove("animation-right2");
    decription.classList.remove("animation-right2");
    name.classList.remove("animation-right2");
    job.classList.remove("animation-right2");
    counter = (counter + 1) % people.length;
    changeData(counter);
    imgBorder.classList.add("animation-left2");
    img.classList.add("animation-left2");
    decription.classList.add("animation-left2");
    name.classList.add("animation-left2");
    job.classList.add("animation-left2");
}

function bottomButton() {
    counter = randomNumber(0, button.length)
    console.log(counter);
    changeData(counter);
}   

function changeData(counter) {
    name.innerText = people[counter].name;
    img.src = people[counter].image;
    job.innerText = people[counter].job;
    decription.innerText = people[counter].text;
}


function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 