import React from 'react';

const ExtraSection = ({ s }) => {

    return (
        <div class="card w-96 bg-primary shadow-2xl my-20">
            <figure class="px-10 pt-10">
                <img src={s.img} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 className="text-3xl font-bold">{s.name}</h2>
                <p className='text-2xl font-bold'>{s.total}</p>

            </div>
        </div>
    );
};

export default ExtraSection;