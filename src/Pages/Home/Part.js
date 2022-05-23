import React from 'react';

const Part = ({ part }) => {

    const { name, img, description, minimumorderquantity, availablequantity, price } = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Parts" /></figure>
            <div className='p-5'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Available Quantity :{availablequantity}</p>
                <p>Minium order Quantity:{minimumorderquantity}</p>
                <p>Price $:{price}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;