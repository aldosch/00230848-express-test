const express = require("express");
const app = express();
const customRoute = require("./custom");

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/custom", customRoute);

app.listen(5000, () => console.log("Server ready on port 3000."));

module.exports = app;
