
import React from 'react'//importing react library
import PropTypes from 'prop-types'//importing Proptypes for properties
import { Outlet,NavLink } from 'react-router-dom';//required imports for routing
function Navbar (props) {
  //Navbar content 
  return (  
    <>
    <nav className='pl-5 bg-blue-900 h-45  rounded-br-xl rounded-bl-xl  '>
    <h1 className=' pt-5 text-4xl text-white'>TextUtils JaiShreeram</h1>
    <ul className='flex pb-5 mt-7'>
        <li className='mr-6 mt-2'>
          <NavLink  className=" mr-10 ml-10 text-white hover:text-gray-300" to="/TextForm">{props.home}</NavLink>
        </li>
        <li className='mr-6 mt-2'>
          <NavLink  className="text-white hover:text-gray-300" to="/About">{props.about}</NavLink>
        </li>
    </ul>
    </nav>
    <div>
      <Outlet/>
    </div>
    </>
  )
}
export default Navbar;
Navbar.propTypes={
  home:PropTypes.string.isRequired,
  about:PropTypes.string.isRequired,
}
Navbar.defaultProps={
  home:'Home',
 about:'About'
}

