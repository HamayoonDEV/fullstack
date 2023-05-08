import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h1>Memories</h1>
        <img
          src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI"
          alt="memories"
        />
      </div>
    </div>
  );
};

export default Navbar;
