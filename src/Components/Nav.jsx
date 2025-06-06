import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  // List of links
  const link = (
    <ul className='flex gap-3.5'>
      <li className='text-xl font-bold '><Link to='/'>Home</Link></li>
      <li className='text-xl font-bold '><Link to='/orderedProduct'>Order Product</Link></li>
      <li className='text-xl font-bold '><Link to='/Product'>Chosen Product</Link></li>
    </ul>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Product</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {link}
        </div>
        <div className="navbar-end">
          <a className="btn btn-success p-2">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
