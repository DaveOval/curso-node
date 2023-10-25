
const fs = require("fs");

const content = fs.readFileSync("readme.md", "utf-8");

const wordCount = content.split(" ").length;

const reactWordCount = content.split(/React/ig).length

console.log(wordCount)
console.log("Palabras react", reactWordCount)

