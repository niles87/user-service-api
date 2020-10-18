const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => res.send("Jake from State Farm"));

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
