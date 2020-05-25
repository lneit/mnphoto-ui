import React from 'react';

const Image = props => {
    return (
        <picture className={props.className} onClick={() => props.clicked()}>
            <img src={props.url} />
            <p>{props.title}</p>
        </picture>
    );
}

export default Image;