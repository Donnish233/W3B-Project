const express = require("express");
const app = express();

// Serve static files from the current directory
app.use(express.static(".")); // This will allow it to serve index.html and other files

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Ensure index.html is served on the root route
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server is running on port 5000");
});
