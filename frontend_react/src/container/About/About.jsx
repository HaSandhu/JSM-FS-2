import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {AppWrap, MotionWrap } from '../../wrapper';

import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';

var banner = document.createElement("div");
banner.className = "b";
banner.innerHTML = "Banner Content";

// document.body.insertBefore(banner,document.body.childNodes[0]);


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
    {/* <div class="a">
    <img className="app__header-profile" src={images.banner} alt="utbanner"/>

    </div>  */}
    {/* banner ^ */}
    

      <h2 className="head-text">time <span className="span-one">pays</span> <br />effort <span>stays</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.20 }}
            transition={{ duration: 0.55, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);