import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import About from "./components/About";
import Experience from "./components/Experiences";
import Technologies from "./components/Technologies";
import Contactme from "./components/Contactme";

function App() {
  return (
    <>
    <Particles
      className="particles"
        params={{
          number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
          }
      }}
    />
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Technologies />
      <Contactme />
    </>
  );
}

export default App;
