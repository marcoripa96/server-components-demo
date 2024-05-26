const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "Pulp Fiction",
  "The Dark Knight",
  "Schindler's List",
  "12 Angry Men",
  "The Lord of the Rings: The Return of the King",
  "Star Wars: The Force Awakens",
  "Inception",
  "Interstellar",
  "The Matrix",
  "Se7en",
  "The Silence of the Lambs",
  "The Usual Suspects",
  "Psycho",
  "One Flew Over the Cuckoo's Nest",
  "Goodfellas",
  "The Godfather: Part II",
  "The Good, the Bad and the Ugly",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Fight Club",
  "Star Wars: Episode V - The Empire Strikes Back",
  "It's a Wonderful Life",
  "Casablanca",
  "City Lights",
  "North by Northwest",
  "Raiders of the Lost Ark",
];

document.addEventListener("DOMContentLoaded", () => {
  // grab the first 5 movies
  const firstFiveMovies = movies.slice(0, 5);

  const moviesList = document.createElement("ul");
  moviesList.id = "movies-list";

  firstFiveMovies.forEach((movie) => {
    const movieItem = document.createElement("li");
    movieItem.textContent = movie;
    moviesList.appendChild(movieItem);
  });

  const moviesListContainer = document.getElementById("movies");
  moviesListContainer.append(moviesList);

  // attach event listener to search input
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", function (event) {
    moviesList.innerHTML = "";
    const searchTerm = event.target.value;

    const regex = new RegExp(searchTerm, "i");

    const filteredMovies = movies
      .filter((movie) => regex.test(movie))
      .slice(0, 5);

    filteredMovies.forEach((movie) => {
      const movieItem = document.createElement("li");
      movieItem.textContent = movie;
      moviesList.appendChild(movieItem);
    });
  });
});
