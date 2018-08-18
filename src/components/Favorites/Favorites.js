import React, { Component } from "react";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: ""
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
  }

  changeNameHandler = e => {
    this.setState({ newName: e.target.value });
  };

  render() {
    console.log(this.state.newName);
    let favoritesDisplay = this.props.favorites.map((favorite, index) => {
      return (
        <div>
          <div className="episodeText">
            <h5 className="episodeSeason">
              Name: {favorite.name}, Season: {favorite.season}, Episode:
              {favorite.nr}
            </h5>
            <form onSubmit={this.props.editName(index, this.state.newName)}>
              <input
                type="text"
                onChange={this.changeNameHandler}
                placeholder="Enter New Name"
              />
            </form>
          </div>
          <button
            className="funcbutton"
            onClick={() => this.props.removeFavorite(index)}
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
