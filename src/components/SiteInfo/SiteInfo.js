import React from 'react';
import classes from './SiteInfo.module.css';

const SiteInfo = props => (
    <div className={classes.SiteInfo}>
        <span><a href="/" rel="home">{props.children}</a></span>
    </div>
);

export default SiteInfo;