import React, { Component } from "react";
import Card from "./Card";

class Flags extends Component {
  state = {
    Flag: [
      {
        emoji: ":flag-af:",
        emojiUnicode: "U+1F1E6 U+1F1EB",
        svgFile: "https://restcountries.eu/data/afg.svg",
        country: {
          capital: "Kabul",
          name: "Afghanistan",
        },
      },
      {
        emoji: ":flag-ax:",
        emojiUnicode: "U+1F1E6 U+1F1FD",
        svgFile: "https://restcountries.eu/data/ala.svg",
        country: {
          capital: "Mariehamn",
          name: "Åland Islands",
        },
      },
      {
        emoji: ":flag-al:",
        emojiUnicode: "U+1F1E6 U+1F1F1",
        svgFile: "https://restcountries.eu/data/alb.svg",
        country: {
          capital: "Tirana",
          name: "Albania",
        },
      },
      {
        emoji: ":flag-dz:",
        emojiUnicode: "U+1F1E9 U+1F1FF",
        svgFile: "https://restcountries.eu/data/dza.svg",
        country: {
          capital: "Algiers",
          name: "Algeria",
        },
      },
    ],
  };
  render() {
    return this.state.Flag.map((flag) => (
      <Card
        image={flag.svgFile}
        name={flag.country.name}
        capital={flag.country.capital}
      />
    ));
    //   <Card
    //     image={this.state.Flag[0].svgFile}
    //     name={this.state.Flag[0].country.name}
    //     capital={this.state.Flag[0].country.capital}
    //   />
  }
}

export default Flags;
