const url = "https://andejuli.github.io/wdd230/fruit.json"

// Fetch data from API
fetch(url)
.then(response => response.json())
.then(data => {
    const fruits = data;

        const fruitSelect1 = document.getElementById("fruit1");
        const fruitSelect2 = document.getElementById("fruit2");
        const fruitSelect3 = document.getElementById("fruit3");

        // loop through the fruit names array and create an option element for each fruit
        fruits.forEach((fruit) => {

            let option = document.createElement("option");
            option.value = fruit.name;
            option.text = fruit.name;

            fruitSelect1.appendChild(option.cloneNode(true));
            fruitSelect2.appendChild(option.cloneNode(true));
            fruitSelect3.appendChild(option.cloneNode(true));
        });
})
.catch(error => console.log(error));