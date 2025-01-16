import React from 'react';

const Activities = () => {
    const activities = [
        { img: '/img1.png', name: 'Eat & Drink' },
        { img: '/img2.png', name: 'Events' },
        { img: '/img3.png', name: 'Club' },
        { img: '/img4.png', name: 'Things to do' },
    ]
    return (
        <div className='container flex flex-col space-y-3 justify-center items-center py-10'>
            <p className='text-2xl lg:text-3xl font-bold'>What are you in the mood for?
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 w-full md:w-4/5 lg:w-full'>
                {
                    activities.map(activity => (
                        <div className='flex flex-col items-center'>
                            <img src={activity.img} alt="" className='w-full h-[454px]' />

                            <p className='text-xl md:text-[22px] font-bold'>{activity.name}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Activities;