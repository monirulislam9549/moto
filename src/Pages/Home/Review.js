import React from 'react';

const Review = () => {
    return (
        <div className='text-4xl font-serif font-bold bg-accent p-4 text-white'>
            <h1 className='text-center'>Our Beloved Customer Review</h1>
            <p className='text-xl font-bold text-center mt-4'>Contact Us</p>

            <h4 className='text-4xl text-center'>Stay connected with us</h4>

            <div className='grid grid-cols-1 justify-items-center gap-5  mt-4'>
                <input className='input w-full max-w-md' type="text" placeholder='Email Address' />
                <input className='input w-full max-w-md' type="text" placeholder='Subject' />

                <textarea className='textarea textarea-warning w-full max-w-md' rows={6} placeholder='Your Message'> </textarea>
                <button class="btn btn-success">Success</button>

            </div>
        </div>
    );
};

export default Review;