const axios = require("axios");

let data = [];

axios
  .get("https://api.got.show/api/episodes/")
  .then(response => data.push(...response.data))
  .catch(error => console.log(error));

const getEpisodes = (req, res, next) => {
  res.status(200).json(data);
};

// const addCharacters =

// };

module.exports = {
  getEpisodes
};
