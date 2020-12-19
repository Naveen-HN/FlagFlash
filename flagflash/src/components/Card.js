import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

class Card extends Component {
  state = {
    isFlipped: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div
          className="card bg-secondary mb-3"
          style={{ maxWidth: "20rem" }}
          onClick={this.handleClick}
        >
          <img
            src={this.props.image}
            style={{ height: "13.6rem", width: "20rem" }}
            alt={this.props.name}
          />
        </div>

        <div
          className="card bg-secondary mb-3"
          style={{ maxWidth: "20rem" }}
          onClick={this.handleClick}
        >
          <div className="card-header">
            <h3>{this.props.name}</h3>
          </div>
          <div className="card-body">
            <h4 className="card-title">Capital: {this.props.capital}</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
