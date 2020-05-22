import React from 'react';
import Image from './Image';

const images = props =>
    props.images.map((image, index) => {
        return <Image 
            key={image.id}
            label={image.label}
            clicked={() => props.clicked(index)}
        >
            {image.desc}
        </Image>
        });

export default images;