import React from "react";
import Card from "../card/Card";
import "./projects.css";
import NetCoffee from "../../img/netcoff.PNG";
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <div name="Projects" className="projectContainer">
      <div className="header">Projects</div>
      <p className="gitLink"> To review my projects in detail: https://github.com/betuldemirr</p>
      <div className="projects">
        <Col >
          <Card className="project" img={NetCoffee} title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam." />
        </Col>
        <Col >
          <Card className="project" img={NetCoffee} title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam." />
        </Col>
        <Col >
          <Card className="project" img={NetCoffee} title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam." />
        </Col>
        <Col>
          <Card className="project" img={NetCoffee} title="Lorem ipsum dolor sit amet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam." />
        </Col>
      </div>

    </div>
  );
};

export default Projects;
