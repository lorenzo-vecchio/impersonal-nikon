import { IKImage } from 'imagekitio-react';
import { useEffect, useRef, useState } from 'react';
import Carousel from './Carousel';

const urlEndpoint = 'https://ik.imagekit.io/impersonalnikon';

const GridGallery = (props) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [showCarousel, setShowCarousel] = useState(false);
    const [linkSingleImage, setLinkSingleImage] = useState('');


    useEffect(() => {
        const handleWindowResize = () => {
        setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function imageClick(link) {
        if (!showCarousel) {
            setLinkSingleImage(link);
        }
        setShowCarousel(true);
    }
    function closeClick() {
        setShowCarousel(false);
    }
    return (
        <div style={styles.container}>
            {
                showCarousel ?
                <Carousel
                    link={linkSingleImage}
                    closeButtonClick={closeClick}
                />
                :
                null
            }
            {props.links.map((link, index) => {
                return (
                    <IKImage
                        key={index}
                        urlEndpoint={urlEndpoint} 
                        path={link}
                        width={windowSize > 900 ? '200px' : '100px'}
                        style={styles.image}
                        lqip={{ active: true, quality: 10 }}
                        loading="lazy"
                        onClick={() => imageClick(link)}
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