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
    axios.get("/api/episodes").then(response => {
      console.log(response);
      this.setState({ episodes: response.data });
    });
  }

  render() {
    return <div>Hi</div>;
  }
}

export default Characters;
