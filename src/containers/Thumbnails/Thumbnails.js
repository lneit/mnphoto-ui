import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Image from '../../components/Images/Image';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axiosImages';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Thumbnails.module.css';
import * as actionCreators from '../../store/actions';

const Thumbnails = ({
    fetchImages,
    imageData,
    loading,
    ...props
}) => {
    useEffect(() => {
        fetchImages();
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

    let thumbnails = <Spinner />;
    if (!loading) {
        thumbnails = imageData.map((img, index) => (
            <Image
                key={img.id}
                title={img.title} 
                url={img.thumbnailUrl} 
                albumId={img.albumId}
                clicked={() => thumbSelectedHandler(index)}
                className={classes.Thumbnail}
            />
        ));
    }

    return (
        <section className={classes.Thumbnails}>
            {thumbnails}
        </section>
    );
}

const mapStateToProps = state => {
    return {
        imageData: state.images.data,
        loading: state.images.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: () => dispatch(actionCreators.fetchImages())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Thumbnails, axios));