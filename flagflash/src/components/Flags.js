import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { fetchFlags } from "../Redux/Action";

class Flags extends Component {
  state = {
    Flag: [],
    Search: "",
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
    if (props.search !== state.Search) {
      return {
        Search: props.search,
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
          ? shuffle(this.state.Flag, this.state.Search).map((flag) => (
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

function shuffle(array, search) {
  var temporaryValue, randomIndex;
  console.log(array);
  let searchResult;
  if (search !== undefined && search !== "") {
    searchResult = array.filter((item) => {
      if (item.country.name.toLowerCase().startsWith(search.toLowerCase()))
        return item;
    });
  } else {
    searchResult = [...array];
  }
  var currentIndex = searchResult.length;
  console.log(searchResult);
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = searchResult[currentIndex];
    searchResult[currentIndex] = searchResult[randomIndex];
    searchResult[randomIndex] = temporaryValue;
  }

  return searchResult;
}

const mapStateToProps = (state) => {
  console.log("map function", state);
  return {
    data: state.Flags.flags,
    search: state.Flags.search,
  };
};
export default connect(mapStateToProps)(Flags);
