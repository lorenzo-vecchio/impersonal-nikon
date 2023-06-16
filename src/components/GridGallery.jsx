import { IKImage } from 'imagekitio-react';

const urlEndpoint = 'https://ik.imagekit.io/impersonalnikon';

const GridGallery = (props) => {
    return (
        <div style={styles.container}>
            {props.links.map((link, index) => {
                return (
                    <IKImage
                        key={index}
                        urlEndpoint={urlEndpoint} 
                        path={link}
                        width="200px"
                        style={styles.image}
                        lqip={{ active: true, quality: 20 }}
                    />
                )
            })}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        boxSizing: 'border-box',
    },
    image: {
        aspectRatio: '1/1',
        objectFit: 'cover',
    }
}

export default GridGallery;