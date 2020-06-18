import React from 'react';
import PersonalData from './personalData';
import Projects from './projects';

const Menu = () => {
        return (
            <div className='menuContainer'>
            <PersonalData />
            <Projects />
            </div>
        );
}

export default Menu;