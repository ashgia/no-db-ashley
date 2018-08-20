import React, { Component } from "react";

class FavoritesButton extends Component {
  constructor(props) {
    super(props);
  }
  //   addEpisodeToFavorites(index) {
  //     // console.log(index);
  //     axios.post("/api/episodes", this.state.episodes[index]).then(response => {
  //       // console.log(response.data);
  //       this.setState({ favorites: response.data });
  //     });

  render() {
    return (
      <button
        className="funcButton"
        // onClick={() => this.props.addEpisodeToFavorites(this.props.index)}
        onClick={this.props.addEpisodeToFavorites}
      >
        Add to Favorites
      </button>
    );
  }
}

export default FavoritesButton;
