import Carousel from '../Carousel';
const UpcomingEvents = () => {
    const upcomingEvents = [
        { img: "/img5.png", name: "Wizkid made in lagos tour", details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', title: 'Upcoming evetns this weekend' },
        { img: "/img5.png", name: "Wizkid made in lagos tour", details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', title: 'Upcoming evetns this weekend' },
        { img: "/img5.png", name: "Wizkid made in lagos tour", details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', title: 'Upcoming evetns this weekend' },
    ];

    return (
        <div className='container flex flex-col space-y-5 my-10 p-10 relative items-center'>
            <p className='text-2xl lg:text-[32px] font-bold'>See How People are Chilling On Chillsbay
            </p>

            <Carousel data={upcomingEvents} />
        </div >
    );
};

export default UpcomingEvents;
