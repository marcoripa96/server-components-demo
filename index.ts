import { server } from "./server";

const s = Bun.serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/client.js") {
      return new Response(Bun.file("./client.js"), {
        headers: { "Content-Type": "application/javascript" },
      });
    } else if (url.pathname === "/styles.css") {
      return new Response(Bun.file("./styles.css"), {
        headers: { "Content-Type": "text/css" },
      });
    }
    try {
      const response = await server(url.pathname, url.searchParams);

      if (url.pathname.startsWith("/api") && typeof response === "object") {
        return Response.json(response);
      }

      if (typeof response === "string") {
        return new Response(response, {
          headers: { "Content-Type": "text/html" },
        });
      }

      return new Response("Unhandled response type", { status: 500 });
    } catch (error) {
      return new Response("Not Found", { status: 404 });
    }
  },
});

console.log(`Listening on ${s.url}`);
