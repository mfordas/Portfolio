import React from 'react';
import { TiSocialGithubCircular, TiHomeOutline } from 'react-icons/ti';
import { FaHtml5, FaCss3, FaJsSquare } from 'react-icons/fa';

import foreCCast1Src from '../../img/CC_foreccast.png'; 
import '../../styling/main_styling.scss';


const ForeCCast = () => {

    return (
        <div className="projectContainer">
            <h3>ForeCCast</h3>
            <h4>Weather app created in CodersCamp. Except weather and forecast you can check current news, hour and moon phase.</h4>
            <div className='linksIcons'>
                <div className="menuProjectIconContainer"><h2><a href='https://nefariusek.github.io/ForeCCast/' rel="noopener noreferrer" target='_blank'><TiHomeOutline /></a></h2><p>Home</p></div>
                <div className="menuProjectIconContainer"><h2><a href='https://github.com/mfordas/ForeCCast' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular /></a></h2><p>ForeCCast Github</p></div>
            </div>
            <div className='galleryHorizontal'>
                <img src={foreCCast1Src} alt='img'/>
            </div>
            <div className='linksIconsStack'>
                <div className="stackIconContainer">
                    <FaHtml5 />
                    <p>HTML5</p>
                </div>
                <div className="stackIconContainer">
                    <FaCss3 />
                    <p>CSS3</p>
                </div>
                <div className="stackIconContainer">
                    <FaJsSquare />
                    <p>JavaScript</p>
                </div>
            </div>
            
        </div>
    );
}

export default ForeCCast;