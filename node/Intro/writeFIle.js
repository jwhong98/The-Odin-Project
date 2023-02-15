const { log } = require("console");
const fs = require("fs");
const content = "Some content!";

// write files in Node
fs.writeFile("./Users/joe/test.txt", content, (err) => {
  if (err) {
    log("err");
  }
});

//append to file
fs.appendFile("file.log", content, (err) => {
  if (err) {
    log(err);
  }
});
