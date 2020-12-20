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
          style={{ width: "20rem", height: "13.6rem" }}
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
          style={{ width: "20rem", minHeight: "13.6 rem" }}
          onClick={this.handleClick}
        >
          <div className="card-header">
            <h5>{this.props.name}</h5>
          </div>
          <div className="card-body">
            <h6 className="card-title">Capital: {this.props.capital}</h6>
            <p className="card-text">
              Population: {this.props.population}
              Official Languages:{" "}
              {this.props.officialLanguage.map((lang) => (
                <span class="badge badge-primary">{lang.name}</span>
              ))}
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
