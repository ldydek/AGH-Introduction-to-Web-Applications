const people = [
    {
        name: "Melisa Mcbridge",
        job: "Product Manager",
        image: "images/photo1.jpg",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda atque dignissimos ea eius," +
        "fugiat laudantium modi quaerat reiciendis, sapiente sit soluta. Ad alias et laborum placeat possimus quasi" +
        "totam voluptatem voluptatum? Alias aperiam blanditiis commodi consequatur consequuntur cumque cupiditate" +
        "deleniti distinctio dolorem eaque enim eos et ex fuga hic, impedit in laboriosam minus molestiae mollitia" +
        "nam nesciunt.",
    },
    {
        name: "Tessa Bailey",
        job: "Web Developer",
        image: "images/photo2.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae delectus error fugiat hic ipsam magni " +
            "modi nisi officiis quidem tempora! Alias amet at beatae consequatur excepturi, exercitationem qui saepe " +
            "vel? Aut eos esse maiores minima minus quidem quis quod vel voluptatibus? Adipisci alias animi, aspernatur " +
            "atque beatae dolor dolorem error fuga impedit iste libero neque nobis nostrum nulla odit perspiciatis " +
            "placeat praesentium provident quaerat quibusdam quod repellat reprehenderit sunt tempora velit voluptas " +
            "voluptatum. Adipisci aut earum enim exercitationem, fugit hic illum inventore magni, natus numquam " +
            "obcaecati placeat quod sequi sit soluta tempore voluptate. Aut cupiditate deleniti dolor, harum omnis saepe.",
    },
    {
        name: "Paul Molongo",
        job: "Web Designer",
        image: "images/photo3.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugiat in laborum minima minus mollitia " +
            "numquam quo ut velit? Beatae delectus dolor dolorum eius et fugiat fugit illo itaque iusto magni molestiae " +
            "officiis, quas quis sed similique vero, vitae. At culpa delectus error hic labore modi perferendis quaerat " +
            "quis repellendus sed, similique sunt totam veniam voluptate voluptatum? Aperiam aut culpa cum cupiditate " +
            "dolorem doloribus dolorum enim est et eveniet fuga fugit incidunt iste iure iusto magnam magni modi " +
            "molestias natus neque nulla perspiciatis placeat porro quasi qui quod recusandae, reiciendis rem soluta " +
            "tempora tempore ullam ut vero? Nam, totam, vero?",
    },
    {
        name: "Liyah Webber",
        job: "The Boss",
        image: "images/photo4.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi illo iure non perspiciatis quod " +
            "repellendus ullam vel! Accusamus earum iure labore rerum ullam? Ab doloribus ea eaque in nesciunt quo " +
            "repudiandae totam! Ab accusamus amet asperiores assumenda commodi corporis cupiditate dignissimos ducimus " +
            "explicabo fugiat id ipsum iste laborum modi molestias, natus nemo nobis non quidem quis quisquam quos " +
            "reprehenderit saepe sunt tempora ullam, unde veniam. Alias asperiores delectus dolore doloremque ducimus " +
            "ea eaque eligendi eveniet, facilis fuga illo iste molestiae nemo nobis quibusdam quisquam repellendus " +
            "repudiandae saepe sapiente sint suscipit ut velit veniam! Consectetur delectus eos modi quaerat qui?",
    }
]
let counter = 0;
const button = document.querySelectorAll("button");
const name = document.querySelector("#name");
const job = document.querySelector("#job");
const decription = document.querySelector("main > p");
const img = document.querySelector("#image-container > div > img");
button[0].addEventListener("click", leftButton);
button[1].addEventListener("click", rightButton);
button[2].addEventListener("click", bottomButton);


function leftButton() {
    counter = (people.length + counter-1) % people.length;
    changeData(counter);
}

function rightButton() {
    counter = (counter + 1) % people.length;
    changeData(counter);
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