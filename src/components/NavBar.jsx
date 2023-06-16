import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const NavBar = () => {
  const location = useLocation();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const getLinkStyle = (path) => {
    return location.pathname === path ? styles.activeLinkStyle : styles.inactiveLinkStyle;
  };

  const navClick = () => {
    setNavOpen(!navOpen);
  }


  return (
    <nav style={windowSize > 900 ? styles.nav : {...styles.nav, ...styles.navMobile}}>
      <div style={styles.titolo}>
        <h1><NavLink to="/" style={styles.removeLinkDefault}>Niccolò Trevisani</NavLink></h1>
      </div>
      {
      windowSize > 900 ? 
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
      : null
      }
      <div style={styles.icons}>
        {
          windowSize > 900 ?
          <a href="https://www.instagram.com/impersonaljesus_/" style={styles.removeLinkDefault} target="_blank">
          <svg style={styles.icons} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
          :
          navOpen ?
          <svg onClick={navClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          :
          <svg onClick={navClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        }
      </div>
      {
        navOpen
        ?
        <div style={styles.mobileLinks}>
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
        :
        null
      }
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
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)"
  },
  navMobile: {
    gridTemplateColumns: "repeat(2, 1fr)",
    fontSize: "0.8em"
  },
  links: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  mobileLinks: {
    position: "fixed",
    top: '5rem',
    backgroundColor: "rgba(0, 0, 0, 0.60)",
    backdropFilter: "blur(10px)",
    width: "100vw",
    boxSizing: 'borderBox',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    zIndex: 999,
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
