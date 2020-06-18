import React from 'react';
import { TiSocialLinkedinCircular, TiSocialGithubCircular, TiHomeOutline} from 'react-icons/ti';
import { FaHtml5, FaCss3, FaReact, FaSass, FaNodeJs, FaInfinity, FaJsSquare, FaDatabase } from 'react-icons/fa';

import {ReactComponent as ReduxLogo} from '../../img/redux_logo.svg';
import {ReactComponent as JestLogo} from '../../img/jest-seeklogo.com.svg';
import '../../styling/main_styling.scss';


const PersonalData = () => {

        return (
                <div className="personalDataContainer">
                    <h2>Mateusz Fordas</h2>
                    <h3>Junior JavaScript Developer</h3>
                    <div className='linksIconsSocial'>
                        <h1><a href='https://fordas.pl/' rel="noopener noreferrer" target='_blank'><TiHomeOutline/></a></h1>
                        <h1><a href='https://github.com/mfordas' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular/></a></h1>
                        <h1><a href='https://www.linkedin.com/in/mateusz-fordas/' rel="noopener noreferrer" target='_blank'><TiSocialLinkedinCircular/></a></h1>
                    </div>
                    <h3>Tech stack</h3>
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
                        <p>React</p>
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
                        <div className="stackIconContainer">
                        <FaInfinity />
                        <p>CI/CD</p>
                        </div>
                    </div>
                </div>
        );
}

export default PersonalData;







