import React, { useEffect, useState } from 'react';
import Image from '../../components/Images/Image';
import classes from './Image.module.css';

const ImageContainer = (props) => {
    const [id, setId] = useState(null);
    const [albumId, setAlbumId] = useState(null);
    const [url, setUrl] = useState(null);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);

        for (let param of query.entries()) {
            console.log(param);
            if (param[0] === 'url') {
                setUrl(param[1]);
            } else if (param[0] === 'title') {
                setTitle(param[1])
            } else if (param[0] === 'id') {
                setId(param[1])
            } else if (param[0] === 'albumId') {
                setAlbumId(param[1])
            }
        }
    }, []);

    const imageClickedHandler = () => {
        props.history.goBack();
    };

    return (
        <section>
            <Image
                clicked={imageClickedHandler}
                id={id} 
                title={title} 
                url={url} 
                albumId={albumId}
                className={classes.Image}
            />
        </section>
    )};

export default ImageContainer;