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

let page = 0;
let moviesPerPage = 5;

document.addEventListener("DOMContentLoaded", async () => {
  const moviesPage = movies.slice(
    page * moviesPerPage,
    page * moviesPerPage + moviesPerPage
  );

  const moviesList = document.createElement("ul");
  moviesList.id = "movies-list";

  moviesPage.forEach((movie) => {
    const movieItem = document.createElement("li");
    movieItem.textContent = movie;
    moviesList.appendChild(movieItem);
  });

  const moviesListContainer = document.getElementById("movies");
  moviesListContainer.append(moviesList);
});

function loadMoreMovies() {
  page += 1;

  const moviesPage = movies.slice(
    page * moviesPerPage,
    page * moviesPerPage + moviesPerPage
  );

  const moviesList = document.getElementById("movies-list");

  moviesPage.forEach((movie) => {
    const movieItem = document.createElement("li");
    movieItem.textContent = movie;
    moviesList.appendChild(movieItem);
  });

  if (page === Math.ceil(movies.length / moviesPerPage) - 1) {
    document.getElementById("load-more-btn").remove();
  }
}
