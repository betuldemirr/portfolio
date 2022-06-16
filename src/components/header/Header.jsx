import "./header.css";
import React from "react";

const Header = () => {
  return (
    <div name="Home" className="mainContainer">
      <div className="mainLeft">
        <div className="mainLeftWrapper">
          <h2 className="intro">Hello, My name is</h2>
          <h1 className="name">Betül Demir</h1>
          <div className="title">
            <div className="titleWrapper">
              <div className="titleItem">Web Developer</div>
              <div className="titleItem">Mobil Developer</div>
              <div className="titleItem">Content Creator</div>
            </div>
          </div>
          <p
            className="description"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
          >
            I studied Computer Engineering at Mersin University. 
            I started my software career with the trainings 
            I received and my own work. I continue to improve myself.
          </p>
        </div>
      </div>
      <div className="mainRight"></div>
    </div>
  );
};
export default Header;
/**        <Me className="bg" /> */
