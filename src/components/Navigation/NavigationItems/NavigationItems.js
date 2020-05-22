import React, { useEffect, useState } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import { API } from 'aws-amplify';
import Spinner from '../../UI/Spinner/Spinner';

const NavigationItems = () => {
    const [albumData, setAlbumData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getAlbumData = async () => {
        try {
            const apiResponse = await API.get("albums" , "/albums");
            setAlbumData(apiResponse);
            setLoading(false);
        } catch (e) {
            console.error('Exception fetching album data: ', e.message);
            setError(e.message);
            setLoading(false);
         }
    }

    useEffect(() => {
        getAlbumData();
    }, []);

    let albums = albumData.map((album, index) => (
        <NavigationItem 
            key={index} 
            link="/" active>{album.title}
        </NavigationItem>
    ));

    if (loading) {
        albums = <Spinner />;
    }

    return (
        <ul className={classes.NavigationItems}>
            {!error && albums}
            {error && <p>Albums couldn't be loaded</p>}
            <NavigationItem link="/">Contact</NavigationItem>
        </ul>
)};

export default NavigationItems;