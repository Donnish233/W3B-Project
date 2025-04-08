
const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));
app.use(express.json());

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running at http://0.0.0.0:5000");
});
