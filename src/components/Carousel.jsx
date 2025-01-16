import React, { useState, useEffect } from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Carousel = ({ data }) => {
    const icons = [
        { icon: '/Calendar.png', text: 'Dec 12 2022' },
        { icon: '/Mark.png', text: 'TBS  Lagos' },
        { icon: '/Clock.png', text: '9:00 PM ' },
        { icon: '/Tag.png', text: 'N20,000' },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out dark:text-white" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((item, i) => (
                    <div key={i} className="w-full flex-shrink-0 p-4 items-center flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
                        <div className='flex flex-col space-y-3 md:w-3/5'>
                            <p className='text-xl font-bold'>{item.title}</p>
                            <img src={item.img} alt="" className='max-w-[550px] rounded-xl' />
                        </div>

                        <div className='flex flex-col space-y-5 md:w-2/5'>
                            <h2 className='text-[32px] font-bold'>{item.name}</h2>

                            <p className='text-lg font-normal'>{item.details}</p>

                            <div className='grid grid-cols-2 gap-y-3 text-lg font-bold'>
                                {
                                    icons.map(item => (
                                        <div className='self-auto flex  items-center space-x-2'>
                                            <img src={item.icon} alt="" className='w-5' />
                                            <span>{item.text}</span>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='flex space-x-5'>
                                <button class="!px-7 md:w-1/2 secondary-button">Add to cart</button>
                                <button class="!px-7 md:w-1/2 primary-button">Book now</button>
                            </div>

                            <div className='flex items-center space-x-3'>
                                <p>Connect with us on:</p>
                                <FaTwitter className='text-primary size-5' />
                                <RiInstagramFill className='text-primary size-5' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {data.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#07292F] dark:bg-primary' : 'bg-[#969DAA] cursor-pointer'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>

            <button className='absolute top-1/2 -translate-y-1/2 left-2 sm:left-0 h-fit' onClick={prevSlide}>
                <MdOutlineArrowBackIosNew className='size-7' />
            </button>

            <button className='absolute top-1/2 -translate-y-1/2 right-2 sm:right-0 h-fit' onClick={nextSlide}>
                <MdOutlineArrowForwardIos className='size-7' />
            </button>
        </div>
    );
};

export default Carousel;