async function showLesserPolandCities() {
    try {
        const response = await fetch('http://localhost:3000/cities');
        const data = await response.json();

        let a = document.querySelector("#a");
        a.innerHTML = "<h1>a) Miasta Małopolski:</h1>";
        a.innerHTML += "<p>" + data.filter(city => city.province === "małopolskie").map(city => city.name).join(", ") + "</p>";
    } catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}


async function showCitiesWithtwoLettersA() {
    try {
        const response = await fetch('http://localhost:3000/cities');
        const data = await response.json();

        let b = document.querySelector("#b");
        b.innerHTML = "<h1>b) Miasta z dwoma literami 'a':</h1>";
        b.innerHTML += "<p>" + data.filter(city => /.*a.*a.*/.test(city.name)).map(city => city.name).join(", ") + "</p>";
    } catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}

async function showFifthDensityCity() {
    try {
        const response = await fetch('http://localhost:3000/cities');
        const data = await response.json();

        let c = document.querySelector("#c");
        let city = data.sort((a, b) => b.dentensity - a.dentensity).map(city => city.name)[4];
        c.innerHTML = "<h1>c) Piąte pod względem gęstości zaludnienia miasto w Polsce:</h1>";
        c.innerHTML += "<p>" + city + "</p>";
    } catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}

async function addCityToName() {
    try {
        const response = await fetch('http://localhost:3000/cities');
        const data = await response.json();

        let d = document.querySelector("#d");
        d.innerHTML = "<h1>d) Dodawanie 'city' do nazwy miasta (tyko te powyżej 100000).</h1>";
        d.innerHTML += "<p>" + data.filter(city => city.people > 10000).map(city => city.name + " City").join(", ") + "</p>";
    } catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}

async function citiesQuantityAboveAndBelow80000() {
    try {
        const response = await fetch('http://localhost:3000/cities');
        const data = await response.json();

        let e = document.querySelector("#e");
        e.innerHTML = "<h1>e) Więcej jest miast poniżej 80000 mieszkańców czy powyżej?</h1>";

        let above = data.filter(city => city.people > 80000).length;
        let below = data.filter(city => city.people < 80000).length;
        e.innerHTML += "<p>Więcej jest miast o liczbie mieszkańców " + (above > below ? "większej" : "mniejszej") +
            " niż 80000. Miast o liczbie mieszkańców powyżej 80000 jest tylko " + above + ", a tych poniżej aż " + below + "." + "</p>";
    } catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}

async function averageSurfaceArea() {
    try {
        const response = await fetch('http://localhost:3000/cities');
        const data = await response.json();

        let f = document.querySelector("#f");
        f.innerHTML = "<h1>f) Ile wynosi średnia powierzchnia miast z powiatów zaczynających się na literkę 'P'?</h1>";
        let cityObjects = data.filter(city => city.township[0] == "P");
        let surfaceAreaSum = sumNumbers(cityObjects.map(city => city.area));
        f.innerHTML += "<p> Powierzchnia ta wynosi: " + surfaceAreaSum / cityObjects.length + "</p>"

    } catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}

function sumNumbers(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    return sum;
}

async function citiesFromOneVoivodeship() {
    try {
        const response = await fetch('http://localhost:3000/cities');
        const data = await response.json();

        let g = document.querySelector("#g");
        g.innerHTML = "<h1>g) Czy wszystkie miasta z województwa pomorskiego są większe od 5000 osób i ile jest takich miast?</h1>";
        let startingQuantity = data.filter(city => city.province == 'pomorskie').length;
        let endingQuantity = data.filter(city => city.province == 'pomorskie').filter(city => city.people > 5000).length;
        g.innerHTML += "<p>" + (startingQuantity == endingQuantity ? "Tak, " : "Nie, ") + "takich miast jest " + endingQuantity + "." + "</p>"
    } catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}


showLesserPolandCities();
showCitiesWithtwoLettersA();
showFifthDensityCity();
addCityToName();
citiesQuantityAboveAndBelow80000();
averageSurfaceArea();
citiesFromOneVoivodeship();