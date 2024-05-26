import { MovieList } from "./MovieList";

async function FetchDataComponent() {
  const response = await fetch("http://localhost:3000/api/movies");
  let movies = await response.json();

  movies = movies.slice(0, 5);

  return MovieList(movies);
}
