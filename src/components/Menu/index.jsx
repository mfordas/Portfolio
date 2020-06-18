import React from 'react';
import PersonalData from './personalData';
import Projects from './projects';
import '../../styling/main_styling.scss';

const Menu = () => {
        return (
            <div className='menuContainer'>
            <PersonalData />
            <Projects />
            </div>
        );
}

export default Menu;