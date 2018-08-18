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
    // console.log(e.target.value);
    this.setState({
      newName: e.target.value
    });
  };

  render() {
    let favoritesDisplay = this.props.favorites.map((favorite, index) => {
      return (
        <div>
          <div className="episodeText">
            <h5 className="episodeSeason">
              Name: {favorite.name}, Season: {favorite.season}, Episode:
              {favorite.nr}
            </h5>
            <form
              action=""
              onSubmit={event =>
                this.props.editName(index, this.state.newName, event)
              }
            >
              <input
                type="text"
                onChange={() => this.state.changeNameHandler}
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
