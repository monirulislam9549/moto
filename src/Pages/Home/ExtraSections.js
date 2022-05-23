import React from 'react';
import deliverd from '../../icons/delivered.png';
import happycustomer from '../../icons/happycustomer.png';
import worldwide from '../../icons/worldwide.png';
import ExtraSection from './ExtraSection';


const ExtraSections = () => {

    const sections = [
        {
            _id: 1,
            name: "Delivered",
            img: deliverd,
            total: "200k"
        },
        {
            _id: 2,
            name: "Happy Customer",
            img: happycustomer,
            total: "30M"
        },
        {
            _id: 3,
            name: "Worldwide country",
            img: worldwide,
            total: "80+"
        },
    ];

    return (
        <div className='my-10 px-12'>
            <div className='text-center'>
                <h1 className='text-primary text-xl uppercase font-bold'>Business Summery</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    sections.map(s => <ExtraSection
                        key={s._id}
                        s={s}
                    ></ExtraSection>)
                }
            </div>
        </div>
    );
};

export default ExtraSections;