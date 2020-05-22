import React from 'react';
import mnLogo from '../../assets/images/mnLogo.jpeg';
import classes from './Logo.module.css';

const Logo = props => (
    <div className={classes.Logo} style={{backgroundColor: props.backgroundColor}}>
        <img src={mnLogo} alt="MN Photo Notes" />
    </div>
);

export default Logo;