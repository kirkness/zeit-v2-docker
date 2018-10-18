const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Heya.");
    res.end();
  })
  .listen(process.env.PORT);

console.log("👋🏻 from the server");
