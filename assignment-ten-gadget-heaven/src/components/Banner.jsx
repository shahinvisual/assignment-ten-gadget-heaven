import React from 'react';

const Banner = ({ title, subtitle, buttons }) => {
    return (
        <div className='bg-[#9538E2] flex flex-col space-y-8 py-12'>
            <h1 className='text-5xl font-semibold text-white w-1/2 text-center mx-auto'>{title}</h1>
            <p className='text-white w-1/2 text-center mx-auto'>{subtitle}</p>
            <div className='flex gap-3 justify-center'>
                {
                    buttons?.map((btn, index) => (<span key={index}>{btn}</span>))
                }
            </div>
        </div>
    );
};

export default Banner;