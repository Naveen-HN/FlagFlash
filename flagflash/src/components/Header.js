import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
        <h1>FlagFlash</h1>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-secondary my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
