import background from "../static/images/BODY_GATHERING.jpg";
import image2 from "../static/images/STEP_BY_STEP.jpg";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef, useState } from 'react';



const HomePage = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  const [isVisible, setIsVisible] = useState(false);
  const blockquoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === blockquoteRef.current) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      });
    });

    observer.observe(blockquoteRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.firstSection}>
        <img src={background} style={styles.image} />
        <div style={styles.firstSectionContent}>
          <h1 style={windowSize > 900 ? styles.titolo : {...styles.titolo, ...styles.titoloMobile}}>La mia ispirazione</h1>
          <h3 style={windowSize > 900 ? styles.descrizione : {...styles.descrizione, ...styles.descrizioneMobile}}>
            I volti sono la migliore fonte di ispirazione.
            <br />
            Dietro a ogni sguardo si cela una storia diversa e pronta per essere
            raccontata
          </h3>
        </div>
      </div>
      <div style={windowSize > 900 ? styles.secondSection : {...styles.secondSection, ...styles.secondSectionMobile}}>
        <img src={image2} style={windowSize > 900 ? styles.image2 : {...styles.image2, ...styles.image2Mobile}}/>
        <blockquote style={styles.secondSectionText} ref={blockquoteRef}>
        {isVisible &&
        (<TypeAnimation
          sequence={[
            "Quando impari a prestare attenzione, puoi immortalare le immagini con la mente o in una foto. Tra le due non c'è differenza."
          ]}
          wrapper="span"
          speed={90}
          repeat={0}
          style={styles.secondSectionText}
        />)}
        <footer>
        <cite>Anonimo</cite>
        </footer>
        </blockquote>
      </div>
    </div>
  );
};

const styles = {
  page: {
  },
  firstSection: {
    height: "100vh",
    width: "100%",
    margin: 0,
    scrollSnapAlign: "start",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  firstSectionContent: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  titolo: {
    textTransform: "uppercase",
    fontSize: "4rem",
    fontWeight: 400
  },
  titoloMobile: {
    fontSize: "2em"
  },
  descrizione: {
    fontWeight: 200,
  },
  descrizioneMobile: {
    textAlign: "center"
  },
  secondSection: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    scrollSnapAlign: "start",
  },
  secondSectionMobile: {
    flexDirection: 'column'
  },
  image2: {
    width: "50%",
    objectFit: "cover",
  },
  image2Mobile: {
    width: '100%',
    height: '50%'
  },
  secondSectionText: {
    fontWeight: 200,
  }
};

export default HomePage;
