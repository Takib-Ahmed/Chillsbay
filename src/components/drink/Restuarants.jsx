import React from 'react';

const Restuarants = () => {
    const restuarants = [
        { img: '/restuarant1.png', name: 'Slow Lagos' },
        { img: '/restuarant2.png', name: 'Nok by Alara' },
        { img: '/restuarant3.png', name: 'Noir' },
        { img: '/restuarant4.png', name: 'Soho' },
    ]
    return (
        <div className='bg-[#F5FAFF] py-12'>
            <div className='container flex flex-col space-y-5'>
                <div className='flex justify-between'>
                    <p className='text-2xl font-bold'>
                        Popular restuarants in Lagos
                    </p>

                    <p className='text-2xl text-primary font-bold'>
                        See More..
                    </p>

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full'>
                    {
                        restuarants.map(restuarant => (
                            <div className='flex flex-col space-y-3'>
                                <img src={restuarant.img} alt="" className='w-full lg:h-[230px] rounded-xl' />

                                <div className='flex flex-col'>
                                    <p className='md:text-2xl font-semibold'>{restuarant.name}</p>
                                    <small>2 Musa Yar’Adua, Lagos Nigeria</small>
                                    <small>African, Italian, Asian, Continental</small>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Restuarants;