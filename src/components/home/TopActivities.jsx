import React from 'react';

const TopActivities = () => {
    const topActivities = [
        { img: '/img5.png', name: 'Seeing' },
        { img: '/img6.png', name: 'Volley Ball Game' },
        { img: '/img7.png', name: 'Wizkid Show' },
        { img: '/img5.png', name: 'Seeing' },
        { img: '/img6.png', name: 'Volley Ball Game' },
        { img: '/img7.png', name: 'Wizkid Show' },
        { img: '/img5.png', name: 'Seeing' },
        { img: '/img6.png', name: 'Volley Ball Game' },
    ]
    return (
        <div className='bg-[#F5FAFF]'>
            <div className='container flex flex-col space-y-3 py-10'>
                <p className='text-2xl lg:text-[32px] font-bold'>Top things to do in Lagos
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full'>
                    {
                        topActivities.map(activity => (
                            <div className='flex flex-col items-center'>
                                <img src={activity.img} alt="" className='w-full lg:h-[230px] rounded-xl' />

                                <p className='md:text-[22px] font-bold'>{activity.name}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default TopActivities;