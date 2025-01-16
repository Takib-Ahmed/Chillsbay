import React from 'react';

const PropularClubs = ({ title }) => {
    const clubs = [
        { img: '/club1.png', name: 'Slow Lagos', date: 'JUN 21' },
        { img: '/club2.png', name: 'Nok by Alara', date: 'JUN 22' },
        { img: '/club3.png', name: 'Noir', date: 'JUN 23' },
        { img: '/club4.png', name: 'Soho', date: 'JUN 25' },
    ]
    return (
        <div className='py-12'>
            <div className='container flex flex-col space-y-5 text-white'>
                <div className='flex justify-between'>
                    <p className='text-2xl font-bold'>
                        {title}
                    </p>

                    <p className='text-2xl text-primary font-bold'>
                        See More..
                    </p>

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full'>
                    {
                        clubs.map(club => (
                            <div className='flex flex-col space-y-3'>
                                <div className='relative'>
                                    <img src={club.img} alt="" className='w-full lg:h-[230px] rounded-xl' />
                                    <button className='bg-white/80 rounded-md text-black text-sm px-7 py-2 font-semibold hover:bg-white transition-colors absolute top-3 right-3'>
                                        {club.date}
                                    </button>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='md:text-2xl font-semibold'>{club.name}</p>
                                    <small>2 Musa Yar’Adua, Lagos Nigeria</small>
                                    <small>African, Italian, Asian, Continental</small>

                                    <button class="primary-button w-fit !text-sm !font-medium mt-3">Book Now</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PropularClubs;