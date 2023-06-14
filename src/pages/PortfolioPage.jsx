import { IKImage } from 'imagekitio-react';
import { useEffect } from 'react';


const urlEndpoint = 'https://ik.imagekit.io/impersonalnikon';

const PortfolioPage = () => {
    const presskitLinks = [];

    for (let i = 1; i <= 31; i++) {
        presskitLinks.push(`/PRESSKIT/presskit${i}.jpg`)
    }

    return (
        <div style={styles.container}>
            {presskitLinks.map((link, index) => {
                return (
                    <IKImage
                        key={index}
                        urlEndpoint={urlEndpoint} 
                        path={link}
                    />
                )
            })}
        </div>
    )
}

const styles = {
    container: {
        width: '100vw',
        height: '100vh'
    },
}

export default PortfolioPage;