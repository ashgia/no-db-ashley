import React, { Component } from "react";
import axios from "axios";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      favorites: []
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
  }
  componentDidMount() {
    axios.get("/api/favorites").then(response => {
      // console.log(response);
      this.setState({ favorites: response.data });
    });
  }
  changeNameHandler = e => {
    this.setState({ newName: e.target.value });
  };

  render() {
    // console.log(this.props.favorites.favorites);
    let favoritesDisplay = this.props.favorites.map((favorite, index) => {
      // console.log(favorite._id);
      return (
        <div key={index}>
          <div className="titleimg" />
          <div className="episodeText">
            <h5 className="episodeSeason">
              <div className="title">Name: {favorite.name}</div>
              <div className="season">Season: {favorite.season}</div>
              <div className="episodenumber">
                Episode:
                {favorite.nr}
              </div>
            </h5>
            <form>
              <input
                type="text"
                onChange={e => this.changeNameHandler(e)}
                placeholder="Enter New Name"
              />
              <button
                className=""
                onClick={() =>
                  this.props.editName(favorite._id, this.state.newName)
                }
              >
                Edit Name
              </button>
            </form>
          </div>
          <button
            className="funcbutton"
            onClick={() => this.props.removeFavorite(favorite._id)}
          >
            Delete
          </button>
        </div>
      );
    });
    return <div className="favorites">{favoritesDisplay}</div>;
  }
}
export default Favorites;
