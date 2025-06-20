// Jesse Newberry
// INF651
// Summer 2025
// Professor Muuva



//First, initialize an array to store the movies
//let movies = [];
//trying a larger array
let movies = [
    "Test",
  "Lord of the Onion Rings",
  "Harry Plopper and the Sorcerer's Scone",
  "The Fast and the Frivolous",
  "Star Warts: The Zit Awakens",
  "Finding Emo",
  "Beauty and the Feast",
  "The Hung Games",
  "Fifty Shades of Gravy",
  "Jurassic Pork",
  "The Devil Wears Pajamas",
  "Planet of the Grapes",
  "The Loin King",
  "Raiders of the Lost Bark",
  "Forrest Humpback",
  "How to Train Your Goldfish",
  "Napoleon Dynamopants",
  "Back to the Fridge",
  "Glazed and Confused",
  "The Big LeBacon",
  "Mission: Implausible"
];
showMovies();
//Write a function to add a movie
function addMovie(){
    //get item from the input on the page
    const movieInput = document.getElementById("movie-name");
    //remove any spaces from the name of the movie
    const movie = movieInput.value.trim();
    // Check if input is empty
    if (movie === "") {
        alert("Please enter a movie title.");
        movieInput.focus();
        return;
    }

    // Check for duplicate (case-insensitive)
    const isDuplicate = movies.some(existing =>
        existing.toLowerCase() === movie.toLowerCase()
    );

    if (isDuplicate) {
        alert("That movie is already on your list.");
        movieInput.focus();
        return;
    }
    //put the movie into the array
    movies.push(movie);
    //call the function to display the movies
    showMovies();
    //clear the input and set the focus to it for good user experience.
    movieInput.value = "";
    movieInput.focus();
}

//Write a function to display the list of movies
function showMovies(){
    //get the item from the page to put movies into
    const movieList = document.getElementById("movie-list");
    //clear items from the unordered list
    movieList.innerHTML = "";
    //iterate through the array using loop and output to <ul>
    for(let m = 0; m < movies.length; m++){
        movieList.innerHTML +=
        //build the html
        "<li>" + movies[m] + ' <button onclick="removeMovie(' + m + ')">Remove Movie</button></li>';
    }
}

//Write a function to allow users to remove movies
function removeMovie(index){
    //console.log("remove movie test");
    movies.splice(index, 1);
    showMovies();
}


//Possible additions/feature enhancements
//-allow a search feature
//-implement categories
//-add sorting by rating or release date

//New data pieces: 
//-category, rating, release date

function searchMovie(){
    const searchTerm = document.getElementById("movie-search");
    const search = searchTerm.value.trim().toLowerCase();

    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";  // ✅ Clear the list correctly

    const filteredMovies = movies.filter(movie =>
        movie.toLowerCase().includes(search)
    );

    for (let m = 0; m < filteredMovies.length; m++) {
        const movieIndex = movies.indexOf(filteredMovies[m]); // get original index
        movieList.innerHTML +=
            "<li>" + filteredMovies[m] +
            ' <button onclick="removeMovie(' + movieIndex + ')">Remove Movie</button></li>';
    }

    // Optional: keep or clear the search field
    searchTerm.value = "";

    const showButton = document.getElementById("showAllMovies");
    showButton.style.visibility = "visible";
}

function showAllMovies(){
    showMovies();
    //toggle the visibility of the show all button
    
    const showButton = document.getElementById("showAllMovies");
    showButton.style.visibility = "hidden";

}