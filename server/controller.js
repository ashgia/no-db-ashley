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
  //   console.log(favorites);
  res.status(200).json(favorites);
};
const displayFavorites = (req, res, next) => {
  res.status(200).json(favorites);
};
const editName = (req, res, next) => {
  //   console.log(req.body);
  let { name } = req.body;
  let { id } = req.params;

  let updatefav = favorites.map((up, i) => {
    if (up._id === id) {
      up.name = name;
    }
  });

  console.log(updatefav);
  //   console.log(id, name);
  //   let favoriteIndex = favorites.findIndex(
  //     favorite => favorite.id === parseInt(id)
  //   );
  //   console.log(favoriteIndex);
  //   favorites[favoriteIndex].name = name;
  res.status(200).json(favorites);
};

const removeFavorite = (req, res) => {
  let deleteID = req.params.id;
  //   console.log(deleteID);

  let deletefavs = favorites.filter((fav, i) => {
    return fav._id !== deleteID;
  });

  console.log("Delete", deletefavs);

  favorites = deletefavs;
  //   let index = favorites.findIndex(episode => {
  //     // console.log(episode._id);
  //     episode._id == deleteID;
  //   });
  //   //   console.log(index);
  //   favorites.splice(index, 1);
  res.status(200).json(favorites);
};

module.exports = {
  getEpisodes,
  addEpisodeToFavorites,
  editName,
  removeFavorite,
  displayFavorites
};
