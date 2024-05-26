// @ts-nocheck
"use client";

export function MovieList(movies: string[]) {
  const moviesList = document.createElement("ul");
  moviesList.id = "movies-list";

  movies.forEach((movie) => {
    const movieItem = document.createElement("li");
    movieItem.textContent = movie;
    moviesList.appendChild(movieItem);
  });

  const moviesListContainer = document.getElementById("movies");
  moviesListContainer.append(moviesList);
}
