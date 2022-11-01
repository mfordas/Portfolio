import React from 'react';
import { TiSocialGithubCircular, TiHomeOutline } from 'react-icons/ti';
import { FaHtml5, FaCss3, FaJsSquare } from 'react-icons/fa';

import animalsSoundsSrc from '../../img/animals_sounds.png';
import '../../styling/main_styling.scss';

const PersonalData = () => {
  return (
    <div className='projectContainer'>
      <h3>Animals sounds</h3>
      <h4>Simple Vanilla JS application with sounds of common animals.</h4>
      <div className='linksIcons'>
        <div className='menuProjectIconContainer'>
          <h2>
            <a href='https://animals.fordas.pl' rel='noopener noreferrer' target='_blank'>
              <TiHomeOutline />
            </a>
          </h2>
          <p>Home</p>
        </div>
        <div className='menuProjectIconContainer'>
          <h2>
            <a href='https://github.com/mfordas/Animals_sounds' rel='noopener noreferrer' target='_blank'>
              <TiSocialGithubCircular />
            </a>
          </h2>
          <p>Animals sounds Github</p>
        </div>
      </div>
      <div className='gallery'>
        <img src={animalsSoundsSrc} alt='img' />
      </div>
      <div className='linksIconsStack'>
        <div className='stackIconContainer'>
          <FaHtml5 />
          <p>HTML5</p>
        </div>
        <div className='stackIconContainer'>
          <FaCss3 />
          <p>CSS3</p>
        </div>
        <div className='stackIconContainer'>
          <FaJsSquare />
          <p>JavaScript</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
