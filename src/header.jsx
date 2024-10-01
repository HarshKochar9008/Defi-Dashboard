
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Modal from './modal';
import WalletConnector from './components/WalletConnector';  
function Header() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <header>
      <div className="logo">PROJECT</div>
      <nav>
        <a href="/home">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/services">Services</a>
        <a href="/settings">Settings</a>
      </nav>
      <div className="profile">
        <button onClick={openModal}>Add Wallet</button>
        <div className="user-info">David</div>
      </div>
      <Modal showModal={showModal} closeModal={closeModal}>
        <h2>Connect Your Wallet</h2>
        <WalletConnector />
      </Modal>
    </header>
  );
}

export default Header;
