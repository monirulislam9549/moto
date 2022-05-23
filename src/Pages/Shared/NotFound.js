import React from 'react';
import notfound from '../../NotFound/notfound.png'

const NotFound = () => {
    return (
        <div class="bg-black shadow-xl image-full">
            <figure><img src={notfound} alt="Shoes" /></figure>
            <div class="card-body">
            </div>
        </div>
    );
};

export default NotFound;