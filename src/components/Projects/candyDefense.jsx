import React from 'react';
import { TiSocialGithubCircular, TiHomeOutline } from 'react-icons/ti';
import { FaHtml5, FaCss3, FaJsSquare } from 'react-icons/fa';

import { ReactComponent as JestLogo } from '../../img/jest-seeklogo.com.svg';
import candyDefense1Src from '../../img/candy_defense.png'; 
import candyDefense2Src from '../../img/candy_defense_2.png'; 
import '../../styling/main_styling.scss';


const PersonalData = () => {

    return (
        <div className="projectContainer">
            <h3>Candy defense</h3>
            <h4>Game created in Vanilla JS. Purpose of the game is to defend candy against worms.</h4>
            <div className='linksIcons'>
                <div className="menuProjectIconContainer"><h2><a href='https://fordas.pl/CandyDefense/Candy_defense' rel="noopener noreferrer" target='_blank'><TiHomeOutline /></a></h2><p>Home</p></div>
                <div className="menuProjectIconContainer"><h2><a href='https://github.com/mfordas/Candy_defense' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular /></a></h2><p>Candy defense Github</p></div>
            </div>
            <div className='gallery'>
                <img src={candyDefense2Src} alt='img'/>
                <img src={candyDefense1Src} alt='img'/>
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
                    <JestLogo />
                    <p>Jest</p>
                </div>
            </div>
            
        </div>
    );
}

export default PersonalData;