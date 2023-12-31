import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul id="NavBar" className="nav nav-tabs">
      <Link to={"/"} className="nav-item" style={{ marginRight: "2rem" }}>
        About Me
      </Link>
      <Link
        to={"/projects"}
        className="nav-item"
        style={{ marginRight: "2rem" }}
      >
        Projects
      </Link>
      <Link to={"/resume"} className="nav-item" style={{ marginRight: "2rem" }}>
        Resume
      </Link>
      <Link
        to={"/contact"}
        className="nav-item"
        style={{ marginRight: "2rem" }}
      >
        Contact
      </Link>
    </ul>
  );
}

export default Nav;
