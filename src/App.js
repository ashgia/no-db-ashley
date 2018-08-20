import React, { Component } from "react";
import "./App.css";
import Episodes from "./components/Episodes/Episodes";

class App extends Component {
  onClickHandler = () => {
    console.log(this.dummydiv);
    window.scrollTo(0, this.dummydiv.offsetTop);
  };

  render() {
    return (
      <div className="App">
        <div className="topBox">
          <img
            src="https://www.theknightsvault.com/wp-content/uploads/2017/08/game-of-thrones-inspired.png"
            alt="logo"
            width={200}
            height={50}
          />
          <button className="topBox__button" onClick={this.onClickHandler}>
            CLICK TO BEGIN
          </button>
        </div>
        <div className="topPicture">
          <img
            src="https://i.ytimg.com/vi/VkdBpi06_KI/maxresdefault.jpg"
            alt="dragon pic"
            style={{
              height: "calc(100vh - 50px)",
              width: "100vw",
              objectFit: "cover"
            }}
          />
        </div>
        <div ref={dummydiv => (this.dummydiv = dummydiv)}>
          <Episodes />
        </div>
      </div>
    );
  }
}

export default App;
