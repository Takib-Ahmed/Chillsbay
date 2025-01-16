import React from 'react';

const SharedHero = ({ data }) => {

    return (
        <div className="w-full h-[636px] bg-cover bg-center" style={{ backgroundImage: `url(${data.img})` }} >

            <div class="container py-[10%]">
                <div className='flex flex-col space-y-3 bg-white/70 dark:bg-black/70 dark:text-white rounded-xl max-w-[555px] p-7'>
                    <h2 className='text-2xl md:text-[32px] font-bold'>{data.h1} </h2>
                    <h4 className='text-xl md:text-2xl font-semibold'>{data.h2}</h4>
                    {data.p && <p className='text-base'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor .</p>}
                    <button class="primary-button text-right w-fit ml-auto">{data.button}</button>
                </div>
            </div>
        </div>
    );
};

export default SharedHero;