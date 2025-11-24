/* STEP 2: Reference the HEADER and the SECTION elements with variables */

const header = document.querySelector('header');
const section = document.querySelector('section');
let jsonObj;

// STEP 3a: Create the asynchronous function populate()
async function populate() {


    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4: Store the URL of a JSON file in a variable */
    const url = 'js/i-scream.json';

    // STEP 5: Use the new URL to create a new request object
    const request = new Request(url);

    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    jsonObj = await response.json();

    // STEP 8: Output the iScream JSON object to the console 
    console.log(jsonObj);
    
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader();

    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors();
}
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader() {
    // Create the H1 element
    const h1 = document.createElement('h1');

    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = jsonObj.companyName;

    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1);
};

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors() {

    // STEP 10c: Attache the JSON topFlavors object to a variable
    let topFlavors = jsonObj.topFlavors;

    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i++) {

        const flavor = topFlavors[i];

        // STEP 10e: build HTML elements for the content
        const article = document.createElement('article');
        article.classList.add("flavor-card");

        // Color-coding based on type
        if (flavor.type === "ice cream") article.style.background = "#d0e8ff";
        if (flavor.type === "sorbet") article.style.background = "#ffe6cc";
        if (flavor.type === "gelato") article.style.background = "#e6ffe6";

        const img = document.createElement('img');
        img.src = "images/" + flavor.image;
        img.alt = flavor.name;

        const h2 = document.createElement('h2');
        const typeP = document.createElement('p');
        const caloriesP = document.createElement('p');

        // STEP 10f: Set the textContent property for each of the above elements (except the UL)
        h2.textContent = flavor.name;
        typeP.textContent = "Type: " + flavor.type;
        caloriesP.textContent = "Calories: " + flavor.calories;

        // STEP 10g: Build a loop for the ingredients array in the JSON
        const ul = document.createElement('ul');
        for (let j = 0; j < flavor.ingredients.length; j++) {
            // add the ingredient to the UL
            const li = document.createElement('li');
            li.textContent = flavor.ingredients[j];
            ul.appendChild(li);
        }        

        
        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(typeP);
        article.appendChild(caloriesP);
        article.appendChild(ul);

        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article);
    };
};
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
