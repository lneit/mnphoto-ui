import React from 'react';
import classes from './Thumbnail.module.css'

const Thumbnail = props => {
    return (
        <picture className={classes.Thumbnail} onClick={props.clicked}>
            <img src={props.thumbUrl} />
            <p>{props.title}!</p>
        </picture>
    );
}

export default Thumbnail;