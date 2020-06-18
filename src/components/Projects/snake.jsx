import React from 'react';
import { TiSocialGithubCircular, TiHomeOutline } from 'react-icons/ti';
import { FaHtml5, FaCss3,  FaJsSquare } from 'react-icons/fa';

import snake1Src from '../../img/CC_snake.png'; 
import '../../styling/main_styling.scss';


const PersonalData = () => {

    return (
        <div className="projectContainer">
            <h3>Snake</h3>
            <h4>Game Snake created in Vanilla JS in CodersCamp.</h4>
            <div className='linksIcons'>
                <div className="menuProjectIconContainer"><h2><a href='https://patryqss.github.io/CC.Snake' rel="noopener noreferrer" target='_blank'><TiHomeOutline /></a></h2><p>Home</p></div>
                <div className="menuProjectIconContainer"><h2><a href='https://github.com/mfordas/CC_Snake' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular /></a></h2><p>Snake Github</p></div>
            </div>
            <div className='galleryHorizontal'>
                <img src={snake1Src} alt='img'/>
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

export default PersonalData;