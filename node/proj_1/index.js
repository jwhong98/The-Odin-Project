const http = require("http");
const fs = require("fs");
const url = require("url");
const { log } = require("console");

// //create server object
// http
//   .createServer((req, res) => {
//     // if response if supposed to be displayed as HTML
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("Hello World"); //write a response to the client
//     res.write(req.url); // returns the part of the url that comes after the domain name
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/about") {
      fs.readFile("about.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/contact-me") {
      fs.readFile("contact-me.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("404.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
