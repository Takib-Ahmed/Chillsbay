import React from 'react';
import Carousel from './../Carousel';

const UpcomingDrinkEvents = () => {
    const upcomingEvents = [
        { img: "/drink-carousel.png", name: "Wizkid made in lagos tour", details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', title: 'Upcoming evetns this weekend' },
        { img: "/drink-carousel.png", name: "Wizkid made in lagos tour", details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', title: 'Upcoming evetns this weekend' },
        { img: "/drink-carousel.png", name: "Wizkid made in lagos tour", details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', title: 'Upcoming evetns this weekend' },
    ];
    return (
        <div className='container relative py-20'>
            < Carousel data={upcomingEvents} />
        </div>
    );
};

export default UpcomingDrinkEvents;