
import './App.css';
import Navbar from "./componets/Navbar";
import Container from "./componets/Container";
import AboutMe from "./componets/AboutMe";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";

function App() {
  return (
      <>
        <Navbar />
        <Container>
        <AboutMe />
        <Projects/>
        <Contact/>
        </Container>


      </>

  );
}

export default App;
