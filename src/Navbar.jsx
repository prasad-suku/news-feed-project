import React from "react";
import "./index.css";
const Navbar = ({ setcategory, category }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-light ">
        <div className="container-fluid">
          <h2 className="navbar-brand text-primary">News Feed</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div
                  className={`nav-link ${
                    category == "technology" ? "active" : ""
                  }`}
                  aria-current="page"
                  onClick={() => setcategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={`nav-link ${
                    category == "business" ? "active" : ""
                  } `}
                  onClick={() => setcategory("business")}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={`nav-link ${
                    category == "health" ? "active" : ""
                  } `}
                  onClick={() => setcategory("health")}
                >
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={`nav-link ${
                    category == "sports" ? "active" : ""
                  } `}
                  onClick={() => setcategory("sports")}
                >
                  Sports
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
