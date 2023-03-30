const url = "https://andejuli.github.io/wdd230/fruit.json"

// Fetch data from API
fetch(url)
.then(response => response.json())
.then(data => {
    const fruits = data;
    console.log(fruits);


        let fruitList = document.getElementById("fruit-selection");




        // create a select element
        const select = document.createElement("select");

        // loop through the fruit names array and create an option element for each fruit
        fruits.forEach((fruit) => {

                // create an input element
                const input = document.createElement("input");
                // set the type attribute to checkbox
                input.setAttribute("type", "checkbox");
                // set the id attribute to "banana"
                input.setAttribute("id", fruit.name);
                // set the name attribute to "fruit[]"
                input.setAttribute("name", "fruit[]");
                // set the value attribute to "banana"
                input.setAttribute("value", fruit.name);


                // create a label element
                const label = document.createElement("label");
                // set the for attribute to "banana"
                label.setAttribute("for", fruit.name);
                // set the text content of the label to "Banana"
                label.textContent = fruit.name;

                fruitList.appendChild(input);
                fruitList.appendChild(label);

        });





  
  


})
.catch(error => console.log(error));