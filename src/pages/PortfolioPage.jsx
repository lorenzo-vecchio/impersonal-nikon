import GridGallery from "../components/GridGallery";

const PortfolioPage = () => {
    const presskitLinks = [];

    for (let i = 1; i <= 31; i++) {
        presskitLinks.push(`/PRESSKIT/presskit${i}.jpg`)
    }

    return (
        <div style={styles.container}>
            <div style={styles.spacer}></div>
            <div style={styles.presskitContainer}>
                <h1 className="sectionTitle">Presskit</h1>
                <div>
                    <GridGallery links={presskitLinks}/>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
    },
    spacer: {
        height: "5rem"
    },
    presskitContainer: {
        margin: '1rem',
        boxSizing: 'border-box',
    }
}

export default PortfolioPage;