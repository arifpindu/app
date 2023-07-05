import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(a) {
  const [theme, setTheme] = useState("Select Theme");
  const setRedTheme = () => {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#D22B2B";
    setTheme("Red");
  };
  const setGreenTheme = () => {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "#7DF9FF";
    setTheme("Green");
  };
  const setBlueTheme = () => {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#0BDA51";
    setTheme("Blue");
  };
  const setDarkTheme = () => {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#212529";
    setTheme("Dark");
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${a.mode} bg-${a.mode}`}>
        <div className="container-fluid">
          <span className="navbar-brand" >
            {a.text}
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/about'}>
                  About
                </Link>
              </li>
            </ul>
            <div>
              <div className="dropdown">
                <button
                  className={`btn ${
                    a.mode === "light" ? "" : "btn-dark"
                  } dropdown-toggle`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {theme}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <i  className="dropdown-item" onClick={setRedTheme}>
                      Red
                    </i>
                  </li>
                  <li>
                    <i className="dropdown-item" onClick={setGreenTheme}>
                      Green
                    </i>
                  </li>
                  <li>
                    <i className="dropdown-item" onClick={setBlueTheme}>
                      Blue
                    </i>
                  </li>
                  <li>
                    <i className="dropdown-item" onClick={setDarkTheme}>
                      Dark
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
