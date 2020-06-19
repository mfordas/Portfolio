import React from 'react';
import { TiArrowUpThick } from 'react-icons/ti';

import '../../styling/main_styling.scss';


const FooterContent = () => {

    const moveToTop = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
    }

    return (
        <footer className="containerFooterHorizontal">
        <p>Copyright © <a target="_blank" rel="noopener noreferrer" href="https://fordas.pl" >Mateusz Fordas</a> 2020 </p>
        <p onClick={() => moveToTop()}><TiArrowUpThick/></p>
        </footer>
    );
}

export default FooterContent;







