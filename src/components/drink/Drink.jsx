import React from 'react';
import DrinkHero from './DrinkHero';
import FindPlace from './FindPlace';
import Restuarants from './Restuarants';
import UpcomingDrinkEvents from './UpcomingDrinkEvents';
import Map from './Map';

const Drink = () => {
    return (
        <>
            <DrinkHero />
            <FindPlace />
            <Restuarants />
            <UpcomingDrinkEvents />
            <Restuarants />
            <Map />
        </>
    );
};

export default Drink;