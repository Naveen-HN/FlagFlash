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
      {
        emoji: "🇦🇸",
        emojiUnicode: "U+1F1E6 U+1F1F8",
        svgFile: "https://restcountries.eu/data/asm.svg",
        country: {
          name: "American Samoa",
          capital: "Pago Pago",
        },
      },
      {
        emoji: "🇦🇩",
        emojiUnicode: "U+1F1E6 U+1F1E9",
        svgFile: "https://restcountries.eu/data/and.svg",
        country: {
          name: "Andorra",
          capital: "Andorra la Vella",
        },
      },
      {
        emoji: "🇦🇴",
        emojiUnicode: "U+1F1E6 U+1F1F4",
        svgFile: "https://restcountries.eu/data/ago.svg",
        country: {
          name: "Angola",
          capital: "Luanda",
        },
      },
      {
        emoji: "🇦🇮",
        emojiUnicode: "U+1F1E6 U+1F1EE",
        svgFile: "https://restcountries.eu/data/aia.svg",
        country: {
          name: "Anguilla",
          capital: "The Valley",
        },
      },
      {
        emoji: "🇦🇶",
        emojiUnicode: "U+1F1E6 U+1F1F6",
        svgFile: "https://restcountries.eu/data/ata.svg",
        country: {
          name: "Antarctica",
          capital: "",
        },
      },
      {
        emoji: "🇦🇬",
        emojiUnicode: "U+1F1E6 U+1F1EC",
        svgFile: "https://restcountries.eu/data/atg.svg",
        country: {
          name: "Antigua and Barbuda",
          capital: "Saint John's",
        },
      },
      {
        emoji: "🇦🇷",
        emojiUnicode: "U+1F1E6 U+1F1F7",
        svgFile: "https://restcountries.eu/data/arg.svg",
        country: {
          name: "Argentina",
          capital: "Buenos Aires",
        },
      },
      {
        emoji: "🇦🇲",
        emojiUnicode: "U+1F1E6 U+1F1F2",
        svgFile: "https://restcountries.eu/data/arm.svg",
        country: {
          name: "Armenia",
          capital: "Yerevan",
        },
      },
    ],
  };

  render() {
    return (
      <div
        style={{
          margin: "0px 10px 0px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignContent: "flex-start",
        }}
      >
        {randomArrayShuffle(this.state.Flag).map((flag) => (
          <Card
            image={flag.svgFile}
            name={flag.country.name}
            capital={flag.country.capital}
          />
        ))}
      </div>
    );
  }
}

function randomArrayShuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export default Flags;
