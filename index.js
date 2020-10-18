const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) =>
  res.json([
    { name: "Mary", email: "mary@email.com" },
    { name: "Bob", email: "bob@email.com" },
  ])
);

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
