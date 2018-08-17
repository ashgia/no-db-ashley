const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 3001;
const { getEpisodes } = require("./controller");

const app = express();
app.use(cors());
app.use(json());

app.get("/api/episodes", getEpisodes);
// app.post("/api/characters", addCharacters);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
