import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import * as actionCreators from '../../../store/actions/index';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const NavigationItems = ({
    fetchAlbums,
    albumData,
    loading
}) => {
    useEffect(() => {
        fetchAlbums();
    }, []);

    const spinner = (<Loader
        type="ThreeDots"
        color="#aa9ebd"
        height={10}
        width={100}
        timeout={30000} //30 secs
    />);

    let albums = spinner;
    if (!loading) {
        albums = albumData.map((album, index) => (
            <NavigationItem 
                key={index} 
                link={"/album/" + encodeURIComponent(album.title)}>{album.title}
            </NavigationItem>
        ));
    }

    return (
        <ul className={classes.NavigationItems}>
            {albums}
            <NavigationItem link={"/contact"}>Contact</NavigationItem>
        </ul>
)};

const mapStateToProps = state => {
    return {
        albumData: state.albums.data,
        loading: state.albums.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAlbums: () => dispatch(actionCreators.fetchAlbums())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);