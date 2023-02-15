const { log } = require("console");
const fs = require("fs");

//simplest way to read a file.
//Params: file path, encoding, callback function that will be called with the file data or error
fs.readFile("/Users/joe/test.txt", "utf8", (err, data) => {
  if (err) {
    error(err);
    return;
  }
  log(data);
});
