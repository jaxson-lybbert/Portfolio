import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

import projectData from "./ProjectData";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<About />} />
            <Route
              path="/projects"
              element={<Projects projectData={projectData} />}
            />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
