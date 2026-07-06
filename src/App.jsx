import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import useTouchScreen from "./hooks/useTouchScreen";

export default function App() {
  return (
    <>
      {!useTouchScreen() ? <CustomCursor /> : null}
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
