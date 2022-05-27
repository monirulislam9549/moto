import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {

    const { _id, name, img, description, minimumorderquantity, availablequantity, price } = part;
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
                    <Link to={`/purchase/${_id}`}>
                        <button className="btn btn-primary text-white">Purchase Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Part;