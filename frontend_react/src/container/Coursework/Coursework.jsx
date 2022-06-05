import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
import { images } from '../../constants';


import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Coursework.scss';

const Coursework = () => {
  const [courses, setExperiences] = useState([]); //////////////////////////////////////////////

  useEffect(() => {
    const query = '*[_type == "courses"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

  }, []); /////////////////////////////////////////////

  return (
    <>
      <h2 className="head-text">Coursework</h2>

      <div className="app__courseworks-container">
        <div className="app__courseworks-exp">
          {courses.map((course) => (
            <motion.div
              className="app__courseworks-exp-item"
              key={course.semester}
            >
              <div className="app__courseworks-exp-semester">
                <p className="bold-text">{course.semester}</p>
              </div>
              <motion.div className="app__courseworks-exp-works">
                {course.class.map((cs) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__courseworks-exp-work"
                      data-tip
                      data-for={cs.name}
                      key={cs.name}
                    >
                      <h4 className="bold-text">{cs.name}</h4>
                      <p className="p-text">{cs.company}</p>
                    </motion.div>
                    {/* <ReactTooltip
                      id={cs.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {cs.desc}
                    </ReactTooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="app__underImage">
          <img className="UTCS" src={images.utcs} alt="profile_bg"/>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Coursework, 'app__courseworks'),
  'coursework',
  'app__greybg',
);