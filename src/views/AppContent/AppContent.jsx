import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';

import Menu from '../../components/Menu';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import '../../styling/main_styling.scss'

Modal.setAppElement('#root');

const AppContent = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const countForOpenModal = () => {
        setTimeout(() => openModal(), 30000);
    }

    useEffect(() => countForOpenModal(), []);

    return (
        <>
            <div onLoadStart={() => countForOpenModal()} className="App">
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="Modal"
                    overlayClassName="Overlay"
                >

                    <h2>Still here?</h2>
                    <div>You are here already 30s! Did you know that average visit time on website is 15s?</div>
                    <div>This means you like it! :) Write me a message or take a phone and make a call. There's no reason to wait any longer.</div>
                    <button className="modalButton" onClick={closeModal}>Close</button>
                </Modal>
                <NavLink className='mainPageLink' to="/projects/main"><TiHome /></NavLink>
                <Menu />
                <Projects />
            </div>
            <Footer />
        </>
    );
}

export default AppContent;