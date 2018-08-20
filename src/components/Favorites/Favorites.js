import React, { Component } from "react";
import axios from "axios";
import EditButton from "../EditButton/EditButton";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Favorites.css";

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

  onSubmitHandler = e => {
    e.preventDefault();
  };

  onEditClickedHandler = id => {
    this.props.editName(id, this.state.newName);
    this.setState({ newName: "" });
  };

  render() {
    console.log(this.state);
    // console.log(this.props.favorites.favorites);
    let favoritesDisplay = this.props.favorites.map((favorite, index) => {
      // console.log(favorite._id);
      return (
        <div key={index}>
          <div className="episodeText">
            <h5 className="episodeSeason">
              <div className="title">Name: {favorite.name}</div>
              <div className="season">Season: {favorite.season}</div>
              <div className="episodenumber">
                Episode:
                {favorite.nr}
              </div>
            </h5>
            <form onSubmit={this.onSubmitHandler}>
              <Input
                value={this.state.newName}
                changed={e => this.changeNameHandler(e)}
                placeholder="Enter New Name"
              />

              {/* <input
                type="text"
                onChange={e => this.changeNameHandler(e)}
                placeholder="Enter New Name"
              /> */}
              {/* <EditButton
                id={favorite._id}
                newName={this.state.newName}
                editName={this.props.editName}
                // editName={this.props.editName(favorite._id, this.state.newName)}
              /> */}
              <Button clicked={() => this.onEditClickedHandler(favorite._id)}>
                Edit Name
              </Button>
              {/* <button
                className=""
                onClick={() =>
                  this.props.editName(favorite._id, this.state.newName)
                }
              >
                Edit Name */}
              {/* </button> */}
            </form>
            <Button
              className="funcbutton"
              clicked={() => this.props.removeFavorite(favorite._id)}
            >
              Delete
            </Button>
          </div>
        </div>
      );
    });
    return <div className="favorites">{favoritesDisplay}</div>;
  }
}
export default Favorites;
