import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Certifications from "./components/Certifications";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <Skills/>
      <Project/>
      <Certifications/>

    </>
  )
}