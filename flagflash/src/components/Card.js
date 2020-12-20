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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isFlipped) {
      this.flipTimeout = setTimeout(() => {
        this.setState(() => ({ isFlipped: false }));
      }, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.flipTimeout);
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div
          className="card bg-secondary mb-3"
          style={{
            width: "20rem",
            height: "13.6rem",
            maxWidth: "20rem",
            maxHeight: "13.6rem",
            boxShadow:
              "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          onClick={this.handleClick}
        >
          <img
            src={this.props.image}
            style={{
              width: "20rem",
              height: "13.6rem",
              maxWidth: "20rem",
              maxHeight: "13.6rem",
            }}
            alt={this.props.name}
          />
        </div>

        <div
          class="card"
          style={{
            width: "20rem",
            height: "13.6rem",
            maxWidth: "20rem",
            maxHeight: "13.6rem",
            boxShadow:
              "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          onClick={this.handleClick}
        >
          <div class="card-body">
            <h5 class="card-title" style={{ textAlign: "center" }}>
              {this.props.name}
            </h5>
            <h6
              class="card-subtitle mb-2 text-muted"
              style={{ textAlign: "center" }}
            >
              Capital: {this.props.capital}
            </h6>
            <p class="card-text">
              Population: {this.props.population}
              <br />
              Official Languages:{" "}
              {this.props.officialLanguage.map((lang) => (
                <span class="badge badge-primary">{lang.name}</span>
              ))}
              <br />
              Currency:
              <span class="badge badge-pill badge-success">
                {this.props.currency.map((sym) => sym.symbol)}
              </span>
              {this.props.currency.map((curr) => (
                <span class="badge badge-pill badge-info">{curr.name}</span>
              ))}
            </p>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
