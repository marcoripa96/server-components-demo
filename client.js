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
];

document.addEventListener("DOMContentLoaded", () => {
  console.log("Client-side script loaded");
  const p = document.createElement("ul");

  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie;
    p.appendChild(li);
  });
  document.body.appendChild(p);
});
