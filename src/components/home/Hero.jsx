import React from 'react';
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
const Hero = () => {
    const locations = ['Dhaka', 'Chottogram', 'Khulna']
    return (
        <div className="bg-[url('/hero.png')] w-full h-[636px] bg-cover bg-center">
            <div class="container flex items-center h-full">
                <div className='flex flex-col space-y-10 bg-white rounded-lg md:bg-transparent p-5 md:p-0'>
                    <h2 className='text-2xl md:text-6xl font-bold md:text-white'>Find amazing things to <br className='hidden md:block' /> do anytime, anywhere <br className='hidden md:block' /> in Lagos.</h2>

                    <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 md:bg-white w-full md:w-fit font-normal rounded-lg md:p-5'>

                        <div className='flex flex-col space-y-1'>
                            <p className='text-xs'>Location</p>
                            <select className='text-[15px] text-[#656B89] border rounded-lg border-gray-300 focus:outline-none p-2.5  w-full md:w-44'>
                                <option>Oshodi</option>
                                <option>Chottogram</option>
                                <option>Dhaka</option>
                            </select>
                        </div>

                        <div className='flex flex-col space-y-1'>
                            <p className='text-xs'>Date</p>
                            <select className='text-[15px] text-[#656B89] w-full md:w-44 border rounded-lg border-gray-300 focus:outline-none p-2.5'>
                                <option>12/08/24</option>
                                <option>Chottogram</option>
                                <option>Dhaka</option>
                            </select>
                        </div>

                        <div className='flex flex-col space-y-1'>
                            <p className='text-xs'>Night Clubs</p>
                            <select className='text-[15px] text-[#656B89] w-full md:w-44 border rounded-lg border-gray-300 focus:outline-none p-2.5'>
                                <option>Night Clubs</option>
                                <option>Chottogram</option>
                                <option>Dhaka</option>
                            </select>
                        </div>

                        <button className='primary-button !font-normal text-base !px-10 w-full md:w-fit'>Search</button>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Hero;