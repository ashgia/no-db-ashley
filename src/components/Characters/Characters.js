import React, { Component } from "react";
import axios from "axios";

class Characters extends Component {
  constructor() {
    super();
    //storing the pulled characters data and storing it into characters, storing our favorites characters into favorites
    this.state = {
      characters: [],
      favorites: []
    };
  }

  componentDidMount() {
    axios.get("https://api.got.show/api/characters/:name").then(response => {
      console.log(response); //   console.log("response: ", response.data.results);
      //   this.setState({ characters: response.data.results });
    });
  }

  render() {
    return <div>Hi</div>;
  }
}

export default Characters;
