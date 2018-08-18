import React, { Component } from "react";
import axios from "axios";
import Favorites from "../Favorites/Favorites";

import "./Episodes.css";

class Episodes extends Component {
  constructor() {
    super();
    //storing the pulled episodes data and storing it into characters, storing our favorites characters into favorites
    this.state = {
      episodes: [],
      favorites: [],
      search: ""
    };

    this.filterHandler = this.filterHandler.bind(this);
    this.editName = this.editName.bind(this);
  }

  componentDidMount() {
    axios.get("/api/episodes").then(response => {
      console.log(response);
      this.setState({ episodes: response.data });
    });
  }
  addEpisodeToFavorites(index) {
    axios
      .post("/api/episodes", this.state.episodes[index])
      .then(response => this.setState({ favorites: response.data }));
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  filterHandler(filter) {
    this.setState({ search: filter });
  }

  editName = (id, name) => {
    console.log(id, name);
    // event.preventDefault();
    axios.put(`/api/episodes/${id}`, { name }).then(response => {
      this.setState({
        favorites: response.data
      });
    });
  };

  removeFavorite = id => {
    axios.delete(`/api/episodes/${id}`).then(response => {
      this.setState({
        favorites: response.data
      });
    });
  };

  render() {
    console.log(this.state);
    let episodesDisplay = this.state.episodes
      .filter(episode =>
        episode.name
          // .toLowerCase()
          .includes(this.state.search)
      )
      .map((episode, index) => {
        if (episode.name.includes(this.state.search)) {
          return (
            <div className="episodeText" key={index}>
              <h5 className="episodeSeason">
                Name: {episode.name}, Season: {episode.season}, Episode:
                {episode.nr}
              </h5>
              <button
                className="funcButton"
                onClick={() => this.addEpisodeToFavorites(index)}
              >
                Add to Favorites
              </button>
            </div>
          );
        }
      });
    return (
      <div className="fullPage">
        <div className="episodes">
          <h1> Episodes: </h1>
          <input
            onChange={e => this.filterHandler(e.target.value)}
            type="text"
          />
          {episodesDisplay}
        </div>
        <div>
          <h1> Favorites: </h1>
          <Favorites
            favorites={this.state.favorites}
            editName={this.editName}
            removeFavorite={this.removeFavorite}
          />
        </div>
      </div>
    );
  }
}

export default Episodes;
