import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


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
      <ContactForm/>
      <Footer/>
      

    </>
  )
}