import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';
import {images}  from '../../constants/index';



const Navbar = () => { //Don't forget to add new images into index page
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo"> 
            <img src={images.test} alt = "test" /> {/*TODO: Redo Logo*/}
        </div>
        <ul className="app__navbar-links"> {/*unordered list*/}
            {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`}>  {/*use this to register click to any part of the array.*/}
                    <div />
                    <a href={'#ytem'}>{item}</a> {/*left to rigth we # lets us jump with a tag named {item}*/}
                </li>
            ))}
        </ul>

        <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} /> {/**This is when hamburger is closed cause link clicked */}
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
} 

export default Navbar