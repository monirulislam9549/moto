import React from 'react';

const ExtraSection = ({ s }) => {

    return (
        <div className="card w-96 bg-primary shadow-2xl my-10">
            <figure className="px-10 pt-10">
                <img src={s.img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-3xl font-bold">{s.name}</h2>
                <p className='text-2xl font-bold'>{s.total}</p>

            </div>
        </div>
    );
};

export default ExtraSection;