import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const Items = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myportfolio">My portfolio</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <li><Link to="/login">Login</Link></li>}
    </>
    return (
        <div className="navbar bg-primary sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {Items}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Motor Bike Parts Mart</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {Items}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;