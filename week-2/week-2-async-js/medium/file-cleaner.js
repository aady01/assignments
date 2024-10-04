const fs = require("fs");
const filePath = "./aady.txt";

function cleanFile(filepath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error:", err.message);
      return;
    }
    const cleanData = data.replace(/\s+/g, " ").trim();

    fs.writeFile(filepath, cleanData, (err) => {
      if (err) {
        console.error("Error writing file:", err.message);
        return;
      }
      console.log("File cleaned successfully");
    });
  });
}

cleanFile(filePath);
