import React from 'react';
import { TiSocialGithubCircular, TiHomeOutline } from 'react-icons/ti';
import { FaHtml5, FaCss3, FaReact, FaSass, FaNodeJs, FaInfinity, FaJsSquare, FaDatabase } from 'react-icons/fa';

import { ReactComponent as ReduxLogo } from '../../img/redux_logo.svg';
import { ReactComponent as JestLogo } from '../../img/jest-seeklogo.com.svg';
import formaZakupy1Src from '../../img/Forma_zakupy_1.png'; 
import formaZakupy2Src from '../../img/Forma_zakupy_2.png'; 
import formaZakupy3Src from '../../img/Forma_zakupy_3.png'; 
import formaZakupy4Src from '../../img/Forma_zakupy_4.png'; 
import '../../styling/main_styling.scss';


const FormaZakupy = () => {

    return (
        <div className="projectContainer">
            <h3>Forma zakupy</h3>
            <h4>Shopping aplication for Forma Dietetyk. Allows to create shopping lists and share them with family and friends. 
                Application is created in two versions: web and mobile.</h4>
            <div className='linksIcons'>
                <div className="menuProjectIconContainer"><h2><a href='https://formazakupy.herokuapp.com/' rel="noopener noreferrer" target='_blank'><TiHomeOutline /></a></h2><p>Home</p></div>
                <div className="menuProjectIconContainer"><h2><a href='https://github.com/mfordas/forma_zakupy' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular /></a></h2><p>Forma Zakupy Github</p></div>
                <div className="menuProjectIconContainer"><h2><a href='https://github.com/mfordas/forma_zakupy_mobile' rel="noopener noreferrer" target='_blank'><TiSocialGithubCircular /></a></h2><p>Forma Zakupy Mobile Github</p></div>
            </div>
            <div className='gallery'>
                <img src={formaZakupy1Src} alt='img'/>
                <img src={formaZakupy2Src} alt='img'/>
                <img src={formaZakupy3Src} alt='img'/>
                <img src={formaZakupy4Src} alt='img'/>
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

export default FormaZakupy;