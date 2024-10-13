import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}
