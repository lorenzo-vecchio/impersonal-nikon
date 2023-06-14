import background from "../static/images/BODY_GATHERING.jpg";
import image2 from "../static/images/STEP_BY_STEP.jpg";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef, useState } from 'react';



const HomePage = () => {

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
          <h1 style={styles.titolo}>La mia ispirazione</h1>
          <h3 style={styles.descrizione}>
            I volti sono la migliore fonte di ispirazione.
            <br />
            Dietro a ogni sguardo si cela una storia diversa e pronta per essere
            raccontata
          </h3>
        </div>
      </div>
      <div style={styles.secondSection}>
        <img src={image2} style={styles.image2}/>
        <blockquote style={styles.secondSectionText} ref={blockquoteRef}>
        {isVisible && (<TypeAnimation
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
  descrizione: {
    fontWeight: 200,
  },
  secondSection: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    scrollSnapAlign: "start",
  },
  image2: {
    width: "50%",
    objectFit: "cover",
  },
  secondSectionText: {
    fontWeight: 200,
  }
};

export default HomePage;
