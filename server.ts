import { html, readFile } from "./utils";

export async function server(pathname: string, searchParams: URLSearchParams) {
  if (pathname === "/api/movies") {
    const data = await readFile("./movies.ts");
    return data.movies;
  }

  if (pathname === "/") {
    return html`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Node.js Server</title>
          <link rel="stylesheet" href="styles.css" />
          <script src="/client.js"></script>
        </head>
        <body>
          <h1>Bacheca film</h1>
          <div class="content">
            <input
              type="text"
              id="search-input"
              placeholder="Cerca un film..."
              onchange="searchMovies"
            />
            <div id="movies"></div>
          </div>
        </body>
      </html>
    `;
  }

  throw new Error(`Not Found: ${pathname}`);
}
