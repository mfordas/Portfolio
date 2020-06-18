import React from 'react';
import { TiSocialGithubCircular } from 'react-icons/ti';
import { FaReact, FaSass, FaNodeJs, FaDatabase } from 'react-icons/fa';

import { ReactComponent as ReduxLogo } from '../../img/redux_logo.svg';
import { ReactComponent as JestLogo } from '../../img/jest-seeklogo.com.svg';
import contactFormSrc from '../../img/contact_form.png'; 
import '../../styling/main_styling.scss';


const PersonalData = () => {

    return (
        <div className="projectContainer">
            <h3>Contact form</h3>
            <h4>Contact form for an event. Created with React/Redux and MongoDB.</h4>
            <div className='linksIcons'>
                <div className="menuProjectIconContainer"><h2><a href='https://github.com/mfordas/contact-form' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular /></a></h2><p>Contact form Github</p></div>
            </div>
            <div className='gallery'>
                <img src={contactFormSrc} alt='img'/>
            </div>
            <div className='linksIconsStack'>
                <div className="stackIconContainer">
                    <FaReact />
                    <p>React</p>
                </div>
                <div className="stackIconContainer">
                    <ReduxLogo />
                    <p>Redux</p>
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
                    <JestLogo />
                    <p>Jest</p>
                </div>
            </div>
            
        </div>
    );
}

export default PersonalData;