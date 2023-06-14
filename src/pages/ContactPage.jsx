import immagine from '../static/images/1.jpg'

const ContactPage = () => {
    return (
        <div style={styles.container}>
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
                <img src={immagine} style={styles.immagine}/>
            </div>            
        </div>
    )
}

const styles = {
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "1fr",
        gridColumnGap: "0px",
        boxSizing: "border-box",
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
}

export default ContactPage;