const ContactPage = () => {
    return (
        <div style={styles.container}>
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
    )
}

const styles = {
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: "10vw",
        boxSizing: "border-box",
    },
    removeLinkDefault: {
        textDecoration: "none",
        color: "white",
    },
}

export default ContactPage;