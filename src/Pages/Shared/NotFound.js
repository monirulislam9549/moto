import React from 'react';
import notfound from '../../NotFound/notfound.png'

const NotFound = () => {
    return (
        <div className="bg-black shadow-xl image-full">
            <figure><img src={notfound} alt="Shoes" /></figure>
            <div className="card-body">
            </div>
        </div>
    );
};

export default NotFound;