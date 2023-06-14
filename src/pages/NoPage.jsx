const NoPage = () => {
    return (
        <div style={styles.container}>
            <h1>Ti sei perso!   : (</h1>
            <h3>La pagina che cerchi non esiste</h3>
            <p>Però non temere, guarda sopra e visita il sito, magari troverai ciò che cercavi!</p>
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
        alignItems: 'center',
    },
}

export default NoPage;