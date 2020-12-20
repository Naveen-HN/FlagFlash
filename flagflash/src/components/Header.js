import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchFlag } from "../Redux/Action/index";
import { connect } from "react-redux";

function Header(props) {
  const [value, setValue] = useState("");
  const handleSearch = (e, val) => {
    if (val === "") {
      props.dispatch(searchFlag(val));
      setValue("");
    } else {
      setValue(e.target.value);
      props.dispatch(searchFlag(e.target.value));
    }
  };
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
        <h1> FlagFlash </h1>{" "}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={(e) => handleSearch(e, "")}
              >
                Home
              </Link>{" "}
            </li>{" "}
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={(e) => handleSearch(e, "")}
              >
                About
              </Link>{" "}
            </li>{" "}
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  value={value}
                  placeholder="Search country &#128269;"
                  onChange={handleSearch}
                />{" "}
              </form>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
}

export default connect()(Header);
