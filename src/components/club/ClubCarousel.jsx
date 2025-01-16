import React from 'react';
import Carousel from '../Carousel';

const ClubCarousel = () => {
    const upcomingEvents = [
        { img: "/club-carousel.png", name: "The 90s with Dj Neptune", details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', title: 'Tonight In Lagos' },
        { img: "/club-carousel.png", name: "The 90s with Dj Neptune", details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', title: 'Tonight In Lagos' },
        { img: "/club-carousel.png", name: "The 90s with Dj Neptune", details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', title: 'Tonight In Lagos' },
    ];
    return (
        <div>
            <div className='container relative py-20'>
                < Carousel data={upcomingEvents} />
            </div>
        </div>
    );
};

export default ClubCarousel;