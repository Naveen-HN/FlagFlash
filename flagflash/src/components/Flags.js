import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { fetchFlags } from "../Redux/Action";

class Flags extends Component {
  state = {
    Flag: [],
  };

  componentDidMount() {
    this.props.dispatch(fetchFlags());
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.Flag) {
      return {
        Flag: props.data,
      };
    }
  }

  render() {
    return (
      <div
        style={{
          margin: "0px 10px 0px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignContent: "flex-start",
        }}
      >
        {" "}
        {this.state.Flag.length > 0
          ? shuffle(this.state.Flag).map((flag) => (
              <Card
                image={flag.svgFile}
                name={flag.country.name}
                capital={flag.country.capital}
                population={flag.country.population}
                officialLanguage={flag.country.officialLanguages}
                currency={flag.country.currencies}
              />
            ))
          : null}{" "}
      </div>
    );
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const mapStateToProps = (state) => {
  console.log("map function", state);
  return {
    data: state.Flags.flags,
  };
};
export default connect(mapStateToProps)(Flags);
