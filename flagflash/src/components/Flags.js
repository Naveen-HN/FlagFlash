import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { fetchFlags } from "../Redux/Action";

class Flags extends Component {
  state = {
    Flag: [],
    Search: "",
    Error: "",
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

  shuffle = (array, search) => {
    var temporaryValue, randomIndex;
    let searchResult;
    if (search !== undefined && search !== "") {
      searchResult = array.filter((item) => {
        if (item.country.name.toLowerCase().startsWith(search.toLowerCase()))
          return item;
        return false;
      });
    } else {
      searchResult = [...array];
    }
    var currentIndex = searchResult.length;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = searchResult[currentIndex];
      searchResult[currentIndex] = searchResult[randomIndex];
      searchResult[randomIndex] = temporaryValue;
    }
    if (searchResult.length === 0)
      return (
        <div class="alert alert-dismissible alert-danger">
          <strong>
            No country found with that name! Please check the spelling.
          </strong>
        </div>
      );

    return searchResult.map((flag, index) => (
      <Card
        key={index}
        image={flag.svgFile}
        name={flag.country.name}
        capital={flag.country.capital}
        population={flag.country.population}
        officialLanguage={flag.country.officialLanguages}
        currency={flag.country.currencies}
      />
    ));
  };

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
          ? this.shuffle(this.state.Flag, this.state.Search)
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.Flags.flags,
    search: state.Flags.search,
  };
};
export default connect(mapStateToProps)(Flags);
