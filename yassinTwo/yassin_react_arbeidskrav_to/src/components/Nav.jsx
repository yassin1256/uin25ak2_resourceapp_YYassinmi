import { Link } from "react-router-dom";
import "../styles/nav.scss";

const Nav = () => {
  return (
    <nav>
      <Link to="/html">HTML</Link>
      <Link to="/css">CSS</Link>
      <Link to="/javascript">JavaScript</Link>
      <Link to="/react">React</Link>
      <Link to="/sanity">sanity and headless cms</Link>
    </nav>
  );
};

export default Nav;
