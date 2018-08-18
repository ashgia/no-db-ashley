const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 3001;
const {
  getEpisodes,
  addEpisodeToFavorites,
  editName,
  removeFavorite
} = require("./controller");

const app = express();
app.use(cors());
app.use(json());

app.get("/api/episodes", getEpisodes);
app.post("/api/episodes", addEpisodeToFavorites);
app.put("/api/episodes/:id", editName);
app.delete("/api/episodes/:id", removeFavorite);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
