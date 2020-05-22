import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import SiteInfo from '../../SiteInfo/SiteInfo';

const Toolbar = props => {

    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={classes.SiteInfo}>
                <SiteInfo>MN PHOTO NOTES</SiteInfo>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
            <div className={classes.Logo}>
                <Logo />
            </div>
        </header>
    );
};

export default Toolbar;