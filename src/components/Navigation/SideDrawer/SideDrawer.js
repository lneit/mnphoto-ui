import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import SiteInfo from '../../SiteInfo/SiteInfo';

const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    // TODO find a better solution for Logo background color control
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo backgroundColor="white"/>
                </div>
                <div className={classes.SiteInfo}>
                    <SiteInfo>MN PHOTO NOTES <span style={{fontSize: "14px", fontWeight: "400", fontStyle: "italic"}}>Inspired by Travel</span></SiteInfo>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;