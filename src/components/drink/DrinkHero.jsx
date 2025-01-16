import React from 'react';
import SharedHero from '../SharedHero';

const DrinkHero = () => {
    const data = {
        img: '/drink-hero.png',
        h1: 'Our top pick for the week! ',
        h2: 'Nok by Alara',
        p: true,
        button: 'Reserve Now',
    }
    return (
        <SharedHero data={data} />
    );
};

export default DrinkHero;