import React from 'react';

const Blogs = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl gap-5">
            <div class="card-body">
                <h1 className='text-xl font-bold my-5'> How will you improve the performance of a React Application?</h1>
                <ul>
                    <li>1. Using Immutable Data Structures</li>
                    <li>2. Function/Stateless Components and React.PureComponent</li>
                    <li>3. Multiple Chunk Files</li>
                    <li>4. Using Production Mode Flag in Webpack</li>
                    <li>5. Dependency optimization</li>
                    <li>6. Use React.Fragments to Avoid Additional HTML Element Wrappers</li>
                </ul>
            </div>
            <div>
                <div className='card-body'>
                    <h1 className='text-xl font-bold my-5'>What are the different ways to manage a state in a React application?</h1>
                    <ul>
                        <li>1. Local state.</li>
                        <li>2. Global state. </li>
                        <li>3. Server state.
                        </li>
                        <li>4. URL state.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='card-body'>
                    <h1 className='text-xl font-bold my-5'>How does prototypical inheritance work?</h1>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className='card-body'>
                <h1 className='text-xl font-bold my-5'>What is a unit test? Why should write unit tests?</h1>
                <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
            </div>
        </div>

    );
};

export default Blogs;