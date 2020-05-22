import React from 'react';
import classes from './Image.module.css'

const Image = props => {
    return (
        <picture className={classes.Image}>
            <img src={props.url} />
            <p>{props.title}!</p>
        </picture>
    );
}

export default Image;