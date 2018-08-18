const axios = require("axios");

let data = [];
let favorites = [];

axios
  .get("https://api.got.show/api/episodes/")
  .then(response => data.push(...response.data))
  .catch(error => console.log(error));

const getEpisodes = (req, res, next) => {
  res.status(200).json(data);
};

const addEpisodeToFavorites = (req, res, next) => {
  favorites.push(req.body);
  console.log(favorites);
  res.status(200).json(favorites);
};

const editName = (req, res, next) => {
  console.log(req.body);
  //   favorites();

  // episode => episode.id === req.params.id && Object.assign(episode, req.body)
};

const removeFavorite = (req, res) => {
  deleteID = req.params.id;
  let index = favorites.findIndex(episode => episode.id == deleteID);
  favorites.splice(index, 1);
  res.status(200).json(favorites);
};

module.exports = {
  getEpisodes,
  addEpisodeToFavorites,
  editName,
  removeFavorite
};
