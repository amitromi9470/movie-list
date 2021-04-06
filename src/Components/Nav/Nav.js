import React from "react";
import history from "../../History";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="tabs" onClick={() => history.push("/")}>
        <u>
          <b>MovieList</b>
        </u>
      </div>
      <div className="tabs" onClick={() => history.push("/Favourite")}>
        <u>
          <b>Favourite</b>
        </u>
      </div>
    </div>
  );
};

export default Nav;
