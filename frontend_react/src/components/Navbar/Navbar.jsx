import React from 'react'
import './Navbar.scss';
import {images}  from '../../constants/index';

const Navbar = () => { //Don't forget to add new images into index page
  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo"> 
            <img src={images.test} alt = "test" /> 
        </div>
        <ul className="app__navbar-links"> {/*unordered list*/}
            {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                <li className="app__flex p-text" key={'link-${item}'}>  {/*use this to register click to any part of the array.*/}
                    <div />
                    <a href={'#ytem'}>{item}</a> {/*left to rigth we # lets us jump with a tag named {item}*/}
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar