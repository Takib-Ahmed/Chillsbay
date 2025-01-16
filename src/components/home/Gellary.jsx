import React from 'react';

const Gellary = () => {
    const images = [
        '/g1.png',
        '/g2.png',
        '/g3.png',
        '/g4.png',
        '/g5.png',
        '/g6.png',
    ]
    return (
        <div className='container py-10 my-10 flex flex-col space-y-5'>
            <p className='text-2xl font-bold'>See How people are chilling on <span className='text-primary'>Chillsbay</span></p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-3 lg:gap-0'>
                {
                    images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default Gellary;