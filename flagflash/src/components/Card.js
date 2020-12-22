import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

export default function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    let flipTimeout;
    if (isFlipped) {
      flipTimeout = setTimeout(() => {
        setIsFlipped(false);
      }, 5000);
    }
    return () => clearTimeout(flipTimeout);
  }, [isFlipped]);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
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
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <img
          src={props.image}
          style={{
            width: "20rem",
            height: "13.6rem",
            maxWidth: "20rem",
            maxHeight: "13.6rem",
          }}
          alt={props.name}
        />
      </div>

      <div
        className="card"
        style={{
          width: "20rem",
          height: "13.6rem",
          maxWidth: "20rem",
          maxHeight: "13.6rem",
          boxShadow:
            "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            {props.name}
          </h5>
          <h6
            className="card-subtitle mb-2 text-muted"
            style={{ textAlign: "center" }}
          >
            Capital: {props.capital}
          </h6>
          <p className="card-text">
            Population: {props.population}
            <br />
            Official Languages:{" "}
            {props.officialLanguage.map((lang, index) => (
              <span key={index} className="badge badge-primary">
                {lang.name}
              </span>
            ))}
            <br />
            Currency:
            <span className="badge badge-pill badge-success">
              {props.currency.map((sym) => sym.symbol)}
            </span>
            {props.currency.map((curr, index) => (
              <span key={index} className="badge badge-pill badge-info">
                {curr.name}
              </span>
            ))}
          </p>
        </div>
      </div>
    </ReactCardFlip>
  );
}
