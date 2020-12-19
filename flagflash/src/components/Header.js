import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          FLAG FLASH
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#">
                <a className="nav-link">Home</a>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <a className="nav-link">About</a>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
