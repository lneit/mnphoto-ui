import React, { useState, useEffect } from 'react';
import Image from '../../components/Images/Image';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axiosImages';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Thumbnails.module.css';

const Thumbnails = props => {
    console.log(props);

    const [imageData, setImageData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('/photos')
            .then(response => {
                setImageData(response.data.slice(0, 7));
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching data: ', error);
                setLoading(false);
                setError(true);
            });
    }, []);

    const thumbSelectedHandler = (index) => {
        const image = imageData[index];
        const queryParams = [];

        for (let p in image) {
            queryParams.push(encodeURIComponent(p) + '=' + encodeURIComponent(image[p]));
        }

        const queryString = queryParams.join('&');

        props.history.push({
            pathname: '/image/' + image.id,
            search: '?' + queryString
        });
    };

    let thumbnails = imageData.map((img, index) => (
        <Image
            key={img.id}
            title={img.title} 
            url={img.thumbnailUrl} 
            albumId={img.albumId}
            clicked={() => thumbSelectedHandler(index)}
            className={classes.Thumbnail}
        />
    ));

    if (loading) {
        thumbnails = <Spinner />;
    }

    return (
        <section className={classes.Thumbnails}>
            {!!!error && thumbnails}
            {error && <p>Images couldn't be loaded</p>}
        </section>
    );
}

export default withErrorHandler(Thumbnails, axios);