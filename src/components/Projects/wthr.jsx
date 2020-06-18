import React from 'react';
import { TiSocialGithubCircular, TiHomeOutline } from 'react-icons/ti';
import { FaHtml5, FaCss3, FaReact, FaJsSquare } from 'react-icons/fa';

import { ReactComponent as ReduxLogo } from '../../img/redux_logo.svg';
import { ReactComponent as JestLogo } from '../../img/jest-seeklogo.com.svg';
import wthr1Src from '../../img/Wthr_mobile_1.png'; 
import wthr2Src from '../../img/Wthr_mobile_2.png'; 
import wthr1webSrc from '../../img/wthr.png'; 
import '../../styling/main_styling.scss';


const Wthr = () => {

    return (
        <div className="projectContainer">
            <h3>Wthr</h3>
            <h4>Minimalistic weather app. Created in two versions - web and mobile.</h4>
            <div className='linksIcons'>
                <div className="menuProjectIconContainer"><h2><a href='https://fordas.pl/Wthr/Wthr' rel="noopener noreferrer" target='_blank'><TiHomeOutline /></a></h2><p>Home</p></div>
                <div className="menuProjectIconContainer"><h2><a href='https://github.com/mfordas/Wthr' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular /></a></h2><p>Wthr Github</p></div>
                <div className="menuProjectIconContainer"><h2><a href='https://github.com/mfordas/Wthr_mobile' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular /></a></h2><p>Wthr Mobile Github</p></div>
            </div>
            <div className='gallery'>
                <img src={wthr1Src} alt='img'/>
                <img src={wthr2Src} alt='img'/>
                <img src={wthr1webSrc} alt='img'/>
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
                <div className="stackIconContainer">
                    <FaReact />
                    <p>React Native</p>
                </div>
                <div className="stackIconContainer">
                    <ReduxLogo />
                    <p>Redux</p>
                </div>
                <div className="stackIconContainer">
                    <JestLogo />
                    <p>Jest</p>
                </div>
            </div>
            
        </div>
    );
}

export default Wthr;