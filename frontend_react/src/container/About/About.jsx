import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {images} from '../../constants/index'; 

import './About.scss';

const abouts = [
  { title: 'Harman Sandhu', description: 'I am a student of the University of Texas at Austin majoring in Computer Science. I love solving problems, and I see every setback as a reason to improve. I am a machine learning, stock trading, and car enthusiast.', imgUrl: images.aboutHarman },
  { title: 'Software development', description: 'Every field might have problems that need solving, but software development was built on the premise of creating problems to solve. This is what drew me to the field in as a freshman in high school, and my passion for the field has only been growing. I am eager to enter the workforce and continue to learn and grow.', imgUrl: images.about01},
  { title: 'Stock Trading', description: 'The American dream is often percieved to be about financial success. No where is that more apparent than in the trading world. The free-for-all that is wall street captivated me as a highschool Sophmore, and I have been invested in the financial frenzy.', imgUrl: images.aboutTrading},
  { title: 'Cars', description: 'The idea that hundreds of pounds of metal could go as fast as nature\'s best, the Cheetah, blew my mind as a kid and the latest and greates features of modern cars continue to blow my mind today. My dream car is the Honda S2000.', imgUrl: images.aboutCar},
]

const About = () => {
  return (
    <>
      <h2 className="head-text"> <span> </span>time <span>pays    ‎ ‎ ‎ </span> <br />effort  <span> stays  ‎ ‎</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About