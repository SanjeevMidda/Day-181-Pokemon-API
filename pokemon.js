// Researched mdn for api calls, and promises
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

//2
fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
    //3
    .then(response => response.json())
    //4
    .then(result => {
        //5
        console.log(`Name:\n${result.name}\n`);
        console.log(`Weight:\n${result.weight}\n`);
        console.log(`Abilities:\n`, result.abilities);        
    }),
    //6
    error => {
        console.log(error);
    }

/*
    Thinking
    1. The program gets a pokemon from an api and prints out some of its key features.

    2. We make an api call to the pokemon api using fetch to get us an object containing information about a pokemon named pikachu.

    3. "Response" contains the returned object from the api call if successful. We use the json() method to convert our json object into an object whose data can be accessed by javascript.

    4. We pass the result of our api call into an arrow function with a parameter of "result", so we can start accessing the data inside our object.

    5. We console.log three key pieces of information: name, weight and abilities. A template literal is used for the first two value, along with "\n" to create a newline. For "abilities" this is placed outside the template literal, as a template literal can only display a specific value, not an array of multiple objects at the same time.

    6. If our api call was not fulfilled an error would be logged to the console.

*/