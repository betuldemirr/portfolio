import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

import Bg from "./img/bg4.jpg";

const App = () => {
  return (
    <div style={{
      backgroundImage: 'url('+Bg+')',
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5"
    }} >
      <Navbar/>
      <Header />
      <About />
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;
