const urlEndpoint = 'https://ik.imagekit.io/impersonalnikon';
import { IKImage } from 'imagekitio-react';
const Carousel = (props) => {
    return (
        <div style={styles.container}>
            <div style={styles.center}>
            {props.link != '' ? 
                <IKImage
                urlEndpoint={urlEndpoint} 
                path={props.link}
                style={styles.image}
                lqip={{ active: true, quality: 10 }}
                onClick={props.closeButtonClick}
                />
            :
            null
            }

            </div>
            <div style={styles.iconContainer}>
                <svg onClick={props.closeButtonClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 999,
    },
    center: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '2rem',
        right: '2rem',
    },
    image: {
        maxWidth: '80vw',
        maxHeight: '80vh',
    },
}

export default Carousel;