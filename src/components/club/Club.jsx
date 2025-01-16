import React from 'react';
import ClubHero from './ClubHero';
import PropularClubs from './PropularClubs';
import ClubCarousel from './ClubCarousel';
import Map from '../drink/Map';

const Club = () => {
    return (
        <>
            <ClubHero />
            <PropularClubs title={'Popular Night Clubs'} />
            <ClubCarousel />
            <PropularClubs title={'Bars and Night clubs near you'} />
            <Map />
        </ >
    );
};

export default Club;