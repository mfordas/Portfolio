import React from 'react';
import { TiSocialGithubCircular, TiHomeOutline } from 'react-icons/ti';
import { FaReact, FaSass, FaNodeJs, FaInfinity, FaDatabase } from 'react-icons/fa';

import taskwars1Src from '../../img/CC_taskwars1.png'; 
import taskwars2Src from '../../img/CC_taskwars2.png'; 
import taskwars3Src from '../../img/CC_taskwars3.png'; 
import '../../styling/main_styling.scss';


const TaskWars = () => {

    return (
        <div className="projectContainer">
            <h3>TaskWars</h3>
            <h4>Final project for CodersCamp. It's web application for increasing productivity.</h4>
            <div className='linksIcons'>
                <div className="menuProjectIconContainer"><h2><a href='https://test-tw-deploy.herokuapp.com/' rel="noopener noreferrer" target='_blank'><TiHomeOutline /></a></h2><p>Home</p></div>
                <div className="menuProjectIconContainer"><h2><a href='https://github.com/mfordas/TaskWars' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular /></a></h2><p>TaskWars Github</p></div>
            </div>
            <div className='galleryHorizontal'>
                <img src={taskwars1Src} alt='img'/>
                <img src={taskwars2Src} alt='img'/>
                <img src={taskwars3Src} alt='img'/>
            </div>
            <div className='linksIconsStack'>
                <div className="stackIconContainer">
                    <FaReact />
                    <p>React</p>
                </div>
                <div className="stackIconContainer">
                    <FaNodeJs />
                    <p>NodeJs</p>
                </div>
                <div className="stackIconContainer">
                    <FaDatabase />
                    <p>MongoDB</p>
                </div>
                <div className="stackIconContainer">
                    <FaSass />
                    <p>Sass</p>
                </div>
                <div className="stackIconContainer">
                    <FaInfinity />
                    <p>CI/CD</p>
                </div>
            </div>
            
        </div>
    );
}

export default TaskWars;