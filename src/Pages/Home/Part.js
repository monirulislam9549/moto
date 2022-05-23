import React from 'react';

const Part = ({ part }) => {

    const { name, img, description, minimumorderquantity, availablequantity, price } = part;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Parts" /></figure>
            <div className='p-5'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Available Quantity :{availablequantity}</p>
                <p>Minium order Quantity:{minimumorderquantity}</p>
                <p>Price $:{price}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;