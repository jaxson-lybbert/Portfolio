import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<About />} />
            {/* <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
