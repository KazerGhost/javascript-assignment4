// API Key(The documentations says i can share it to a public repo safely)
const API_KEY = "live_bOOAvp2j6nu1LuvDVbpTh7AKYmBeSC4GkfdWwGLuEuO8g7EL9gSJ8pZfzk9gWceU";

// function to get and display the new cat image and the breed info
async function getNewCat() {
    try {
        // dynamically add student id
        const name = "Kasper Luboinski";
        const id = "1270555";
        document.getElementById("studentInfo").textContent = `Student: ${name} | ID: ${id}`;

        // get cat image from API, only getting cats with breeds in the description
        const response = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1", {
            headers: { "x-api-key": API_KEY }
        });

        const data = await response.json();
        const cat = data[0]; // get the first image from the response

        // Update cat image and breed info
        document.getElementById("catImage").src = cat.url;
        document.getElementById("catImage").alt = cat.breeds[0].name; // sets alt text to breed name
        document.getElementById("breedName").textContent = `Breed: ${cat.breeds[0].name}`;
        document.getElementById("origin").textContent = `Origin: ${cat.breeds[0].origin}`;
        document.getElementById("weight").textContent = `Weight: ${cat.breeds[0].weight.imperial} lbs / ${cat.breeds[0].weight.metric} kg`;
        document.getElementById("lifespan").textContent = `Lifespan: ${cat.breeds[0].life_span} years`;
    } catch (error) {
        console.error("Error fetching cat:", error);
        alert("Could not load cat. Please try again.");
    }
}

// event listener
document.getElementById("newCatBtn").addEventListener("click", getNewCat);
