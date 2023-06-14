import { Outlet, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {

  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path ? styles.activeLinkStyle : styles.inactiveLinkStyle;
  };


  return (
    <nav style={styles.nav}>
      <div style={styles.titolo}>
        <h1><NavLink to="/" style={styles.removeLinkDefault}>Niccolò Trevisani</NavLink></h1>
      </div>
      <div style={styles.links}>
        <p style={getLinkStyle("/")} className="linkNav">
          <NavLink to="/" style={styles.removeLinkDefault}>
            home
          </NavLink>
        </p>
        <p style={getLinkStyle("/portfolio")} className="linkNav">
          <NavLink to="portfolio" style={styles.removeLinkDefault}>
            portfolio
          </NavLink>
        </p>
        <p style={getLinkStyle("/contact")} className="linkNav">
          <NavLink to="contact" style={styles.removeLinkDefault}>
            contatti
          </NavLink>
        </p>
      </div>
      <div style={styles.icons}>
        <a href="https://www.instagram.com/impersonaljesus_/" style={styles.removeLinkDefault} target="_blank">
        <svg
          style={styles.icons}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
        </a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    gridColumnGap: "0px",
    width: "100%",
    height: "5rem",
    boxSizing: "border-box",
    position: "fixed",
    left: "0",
    top: "0",
    backgroundColor: "rgba(0, 0, 0, 0.60)",
    zIndex: "999",
    backdropFilter: "blur(10px)"
  },
  links: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  removeLinkDefault: {
    textDecoration: "none",
    color: "white",
  },
  titolo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "15px"
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "15px",
  },
  activeLinkStyle: {
    borderBottom: "2px solid white",
  },
  inactiveLinkStyle: {
    borderWidthe: "0px",
  },
};

export default NavBar;
