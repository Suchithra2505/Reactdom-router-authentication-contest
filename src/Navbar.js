import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import Modal from './Modal';



const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
    <nav className="navbar">
        <div className="navbar-left">
        <p>Header</p>
      </div>
      <div>
      <Link to="/signup" className="nav-link">Signup</Link>
        <span className="gap"></span> 
        <Link to="#" onClick={toggleModal} className="nav-link">Profile</Link>
      </div>
    </nav>
    {showModal && <Modal onClose={toggleModal} />}
    </>
  );
};

export default Navbar;
