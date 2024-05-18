# server-components-demo 30/05/2024

## Presentation steps

1. Client description

2. What is the client?

   - Data cannot live on the client.
   - Can be much and be dynamic (database read write)
   - Fetch API

3. Problems arise:

   - Content not ready when the user lands on the page
   - Content displacement as soon as the the data is loaded
   - Slow connection

4. What is a web page?
   - HTML sent to the client from a server
5. Two different environments:

   - server
   - client

6. Are they really two different environments?

   - Show server
   - Inline client code in script tag

7. Spot optimizations

   - Why fetch on the client when the server can do it?
   - Move data fetching before the page response
     - use fetch with the api, add hostname because we are on the server
     - pass data in template string with JSON.stringify
     - serialization to pass data from the client to the server
   - Why fetching and doing a second round trip to the server?
   - Move the function right before the page response

8. Pagination

   - Client state not shared with the server
   - Client lives in the future (different environment) it cannot talk back to the server
   - So what's the state now?
     - The URL!
   - search params
   - on url change resend down the whole html

9. Composition

   - Server component
   - Client component
     - use client

10. Next.js
