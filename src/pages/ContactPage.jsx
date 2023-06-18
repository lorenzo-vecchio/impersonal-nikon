import { useEffect, useRef, useState } from 'react';
import immagine from '../static/images/1.jpg'

const ContactPage = () => {
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

    return (
        <div style={windowSize > 900 ? styles.container : {...styles.container, ...styles.containerMobile}}>
            <div style={styles.contactsContainer}>
                <h1>Mi vuoi contattare?</h1>
                <h3>Ecco dove puoi farlo:</h3>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/impersonaljesus_/" target="_blank" style={styles.removeLinkDefault} className="linkNav">INSTAGRAM</a>
                    </li>
                    <li>
                        <a href="mailto:niccolofotografia98@gmail.com" target="_blank" style={styles.removeLinkDefault} className="linkNav">niccolofotografia98@gmail.com</a>
                    </li>                    
                </ul>
            </div>
            <div style={styles.immagineContainer}>
                <img src={immagine} style={windowSize > 900 ? styles.immagine : {...styles.immagine, ...styles.immagineMobile}}/>
            </div>            
        </div>
    )
}

const styles = {
    container: {
        height: '100vh',
        width: '100vw',
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "1fr",
        gridColumnGap: "0px",
        boxSizing: "border-box",
    },
    containerMobile: {
        gridTemplateColumns: "repeat(1, 1fr)",
        paddingTop: '5rem'
    },
    removeLinkDefault: {
        textDecoration: "none",
        color: "white",
    },
    contactsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    immagineContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    immagine: {
        height: "100vh",
    },
    immagineMobile: {
        height: 'unset',
        width: '100vw'
    },
}

export default ContactPage;