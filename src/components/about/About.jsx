import "./about.css";
import { Container, Row, Col } from 'react-bootstrap';
const About = () => {
  return (
    <div name="About" className="aboutContainer">
      <div className="aboutLeft" >
        <h2 className="title" data-aos="zoom-out-down" data-aos-duration="3000">Skills</h2>
        <Container className="skillContainer" data-aos="zoom-out-down" data-aos-duration="3000" >
          <Row>
            <Col className="skill" >
              <img src={require("../../img/html.png")} />
              <p>HTML</p></Col>
            <Col className="skill" >
              <img src={require("../../img/css.png")} />
              <p>CSS</p></Col>
          </Row>

          <Row>
            <Col className="skill" >
              <img src={require("../../img/javascript.png")} />
              <p>JavaScript</p></Col>
            <Col className="skill" >
              <img src={require("../../img/react.png")} />
              <p>React</p>
            </Col>
          </Row>

          <Row>
            <Col className="skill" >
              <img src={require("../../img/react.png")} />
              <p>React Native</p>
            </Col>
            <Col className="skill" >
              <img src={require("../../img/firebase.png")} />
              <p>Firebase</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="aboutRight">
        <h2 className="title" data-aos="zoom-out-down" data-aos-duration="3000">About Me</h2>
        <div className="explain" data-aos="zoom-out-down" data-aos-duration="3000">
          &nbsp;&nbsp; I started web software by working in the front-end field. I am coding a responsive website using HTML5, CSS3 and JavaScript languages. I am using React.js technology as the framework. In mobile software, I develop applications with React Native technology. I can make database connections with Firebase. I also know C# and Java languages at a basic level. I like to use new technologies and I want to improve myself more.

        </div>
      </div>
    </div>
  );
};
export default About;
/**
 *         <div className="imgs">
          <img src={require("../../img/html.png")} />
          <img src={require("../../img/css.png")} />
          <img src={require("../../img/javascript.png")} />
          <img src={require("../../img/react.png")} />
          <img src={require("../../img/firebase.png")} />
        </div>



        <ul>
          <li>
            <div className="box">
              <img src={require("../../img/html.png")} />
            </div>
            <div className="box">
              <img src={require("../../img/css.png")} />
            </div>
            <div className="box">
              <img src={require("../../img/javascript.png")} />
            </div>
            <div className="box">
              <img src={require("../../img/react.png")} />
            </div>
            <div className="box">
              <img src={require("../../img/firebase.png")} />
            </div>
          </li>
        </ul>
 */
