import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl text-blue-500 my-5">About Me</h2>
                    <p>My name: Monirul Islam</p>
                    <p>Email: monirulislam9549@gmail.com</p>
                    <p>Educational Background: SSC from Latif Rahman High School with gpa 4.25. HSC from Gohira Degree College with gpa 2.00 and studying BBA in Premier University, Chittagong in 7th semester</p>
                    <ul>
                        <h1 className='font-bold'>Skills:</h1>
                        <li>HTML/CSS</li>
                        <li>Responsive Design</li>
                        <li>JavaScript</li>
                        <li>ReactJs</li>
                        <li>API</li>
                        <li>NodeJs</li>
                        <li>MongoDB</li>
                        <li>Debugging</li>
                        <li>Googling stuff</li>
                        <li>Backend</li>
                    </ul>
                    <h1 className='text-center font-bold my-3'>My Project</h1>
                    <a className='btn btn-link' href="https://assignment-11-mobile-warehouse.web.app/">Project-1</a>
                    <a className='btn btn-link' href="https://sweet-kleicha-f363fc.netlify.app/home">Project-2</a>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;