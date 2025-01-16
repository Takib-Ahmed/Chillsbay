import React from 'react';

const PaymentMethod = () => {
    const methods = [
        { img: 'payment1.png', title: "Your  entire  trip\n in one checkout!", description: "Add multiple experiences to your cart and checkout on one click." },
        { img: 'payment2.png', title: 'Pay with Crypto\n on the go', description: "Enjoy the freedom of universal payments for a seamless marketplace experience" },
        { img: 'payment3.png', title: 'Free Cancellation\n and ticket transfer', description: "Resell your tickets or cancel your reservations at zero cost 24 hours before." },
    ]
    return (
        <div className='container flex flex-col space-y-5 py-10 items-center bg-[#F5FAFF] rounded-xl my-10 drop-shadow-xl'>
            <p className='text-3xl font-bold'>Why Use Chillsbay?</p>

            <div className='grid place-items-center md:grid-cols-3 gap-y-7 md:gap-y-0'>
                {
                    methods.map(method => (
                        <div className='flex flex-col space-y-2 items-center w-4/5 sm:w-3/4 md:whitespace-pre-line text-center' key={method.title}>
                            <img src={method.img} alt="" className='w-[80px]' />

                            <p className='text-2xl font-bold'>{method.title}</p>

                            <span className='text-lg font-normal'>{method.description}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PaymentMethod;