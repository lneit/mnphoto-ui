import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Image from '../Images/Image';
import Thumbnail from '../Images/Thumbnail';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Cover.module.css';
import axios from '../../axiosImages';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Cover = props => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('/photos')
            .then(response => {
                console.log(response);
                setImages(response.data.slice(0, 7));
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching data: ', error);
                setLoading(false);
                setError(true);
            });
    }, []);

    const imageSelectedHandler = (index) => {
        console.log('Image clicked: ', index);
        setSelectedImage(index);
    };

    let imgs = images.map((img, index) => (
        <Thumbnail 
            key={img.id} 
            title={img.title} 
            thumbUrl={img.thumbnailUrl} 
            albumId={img.albumId}
            clicked={() => imageSelectedHandler(index)}
        />
    ));

    if (loading) {
        imgs = <Spinner />;
    }
    
    return (
        <Aux>
            <section className={classes.Cover}>
                {!!!error && imgs}
                {error && <p>Images couldn't be loaded</p>}
            </section>
            {selectedImage && 
                <section className={classes.Cover}>
                    <Image
                        id={images[selectedImage].id} 
                        title={images[selectedImage].title} 
                        url={images[selectedImage].url} 
                        albumId={images[selectedImage].albumId}
                    />
                </section>
            }
        </Aux>
    );
};

export default withErrorHandler(Cover, axios);
