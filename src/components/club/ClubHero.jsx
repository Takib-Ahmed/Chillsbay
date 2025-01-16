import React from 'react';
import SharedHero from './../SharedHero';

const ClubHero = () => {
    const data = {
        img: '/club-hero.png',
        h1: 'Club Quilox ',
        h2: 'Amaarae & Tems on June 3rd ',
        p: false,
        button: 'Book A Section Now',
    }
    return (
        <SharedHero data={data} />
    );
};

export default ClubHero;