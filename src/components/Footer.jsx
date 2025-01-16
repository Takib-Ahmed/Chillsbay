import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container grid lg:grid-cols-4 gap-y-10 gap-x-5 py-20'>

            <div className='flex flex-col space-y-5 lg:col-span-1 order-1'>
                <img src="/logo.png" alt="" className='w-[150px]' />
                <small>Copyright 2022 © </small>

                <div className='flex space-x-4 items-center'>
                    <FaFacebookF className='text-primary size-5' />
                    <FaTwitter className='text-primary size-5' />
                    <FaInstagram className='text-primary size-5' />
                    <FaYoutube className='text-primary size-5' />
                    <FaTiktok className='text-primary size-5' />
                </div>
            </div>

            <div className='grid grid-cols-2 gap-x-20 lg:col-span-2 order-3 lg:order-2'>

                <div className='flex flex-col space-y-5'>
                    <p className='font-bold border-b border-gray-300 pb-5'>MENU</p>

                    <div className='flex justify-between w-full text-[#656B89]'>
                        <div className='flex flex-col space-y-2'>
                            <p>Home</p>
                            <p>Eat</p>
                            <p>Drink</p>
                            <p>Events</p>
                            <p>Club</p>
                            <p>Recreation</p>

                        </div>

                        <div className='flex flex-col space-y-2'>
                            <p>Blog</p>
                            <p>Careers</p>
                            <p>Contact</p>
                            <p>FAQs</p>

                        </div>
                    </div>
                </div>

                <div className='flex flex-col space-y-5'>
                    <p className='font-bold border-b border-gray-300 pb-5'>UTILITY PAGES</p>

                    <div className='flex flex-col space-y-2 text-[#656B89]'>
                        <p>Start Here</p>
                        <p>Pay with Crypto</p>
                        <p>Style Guide</p>
                        <p>Password Protected</p>
                        <p>Style Guide</p>
                        <p>Licenses</p>
                        <p>Changelog</p>
                    </div>
                </div>

            </div>


            <div className='flex flex-col space-y-2 bg-[#F5FAFF] dark:bg-[#D0D8E71A] rounded-xl p-5 lg:col-span-1 order-2 lg:order-3 max-w-[290px]'>
                <div className='bg-primary rounded-2xl p-2 w-fit'>
                    <img src="/compash.png" alt="" className='w-8' />
                </div>

                <h4 className='text-xl font-bold'>Become a Partner</h4>
                <p className='text-[#656B89]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.</p>

                <button class="primary-button">Join Now</button>
            </div>

        </div>
    );
};

export default Footer;