import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchFlag } from "../Redux/Action/index";
import { connect } from "react-redux";

function Header(props) {
  const handleSearch = (e) => {
    props.dispatch(searchFlag(e.target.value));
  };
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
        <h1> FlagFlash </h1>{" "}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link"> Home </a>{" "}
              </Link>{" "}
            </li>{" "}
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link"> About </a>{" "}
              </Link>{" "}
            </li>{" "}
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  onChange={handleSearch}
                />{" "}
                <button
                  className="btn btn-secondary my-2 my-sm-0"
                  type="submit"
                >
                  Search{" "}
                </button>{" "}
              </form>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
}

export default connect()(Header);
