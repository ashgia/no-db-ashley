import React, { Component } from "react";

class EditButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="editButton"
        onClick={() => this.props.editName(this.props.id, this.props.newName)}
      >
        Edit Name
      </button>
    );
  }
}

export default EditButton;
