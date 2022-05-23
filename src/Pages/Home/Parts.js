import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    return (
        <div className='my-20 px-12'>
            <h2 className='text-4xl text-primary font-bold text-center uppercase'>Parts We Sell</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;