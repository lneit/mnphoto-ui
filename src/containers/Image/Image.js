import React, { useEffect, useState } from 'react';
import Image from '../../components/Images/Image';

const ImageContainer = (props) => {
    const [albumAttributes, setAlbumAttributes] = useState({});

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const attrs = {} 

        for (let param of query.entries()) {
            attrs[param[0]] = param[1];
        }
        setAlbumAttributes(attrs);
    }, []);

    const imageClickedHandler = () => {
        props.history.goBack();
    };

    return (
        <section>
            <Image
                clicked={imageClickedHandler}
                {...albumAttributes}
            />
        </section>
    )};

export default ImageContainer;