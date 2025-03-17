import Nav from "./Nav";
import "../styles/layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
