'use client'; // Ensure this component is treated as a client-side component

import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState
import Link from 'next/link';
import '/public/style/navbarStyle.css';
import Image from 'next/image';


const NavbarPage = () => {
  // State to manage the collapse status and modal visibility
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  // Toggle function to manage the collapse status
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Function to open the modal
  const handleOpenModal = () => setShowModal(true);
  // Function to close the modal
  const handleClose = () => setShowModal(false);

  return (
    <div id='Home'>
      <nav className="navbar navbar-expand-lg" id='navBar'>
        <div className="container-fluid">
          <Link href="/#Home" className="nav-link active" aria-current="page">
          <Image src="/images/Logo.png" alt='Logo' className='LogoImg'  width={196} height={186} />
          
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            {isCollapsed ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <span>&#10005;</span>
            )}
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              !isCollapsed ? 'show' : ''
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-end align-item-end" style={{ justifyContent: 'flex-end', alignItems: 'flex-end', float:'inline-end' }}>
              <li className="nav-item">
                <Link href="/services" className="nav-link" aria-current="page">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/aboutus" className="nav-link" aria-current="page">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/career" className="nav-link" aria-current="page">
                  CAREER
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={handleOpenModal}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} id="exampleModalToggle" aria-hidden={!showModal} aria-labelledby="exampleModalToggleLabel" tabIndex="-1"  style={{ display: showModal ? 'block' : 'none', justifyContent:'flex-end', alignItems:'flex-end', margin:'50px 0px 0px 480px' }}>
        <div className="modal-dialog modal-dialog-end modal-dialog-scrollable"> {/* Center modal vertically */}
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel" >Contact Us</h1>
              <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
            </div>
            <div className="modal-body" href="#scrollPanel">
              <form>
                <div className="mb-3" id='scrollPanel'>
                <Image src="/images/formLogo.png" height={100} width={100} alt='formLogo.png' className='formLogo' />

                <h1>Lead To Success</h1>
<p>Are you an aspiring Marketing Growth Hacker looking for an opportunity to take on new challenges and advance your career?</p>


                  <h4>Tell us a bit more about yourself</h4>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First Name' />
                  
                </div>

                
                <div className="mb-3">
                 
                  <input type="text" className="form-control" id="lastName" placeholder='Last Name' />
                </div>
                <div className="mb-3">
                 
                  <input type="email" className="form-control" id="Email" placeholder='Your Email' />
                </div>
                <div className="mb-3">
                 
                  <input type="tel" className="form-control" id="Email" placeholder='Phone Number' />
                </div>
                <div className="mb-3">
                 <h5>Anything else we should know?</h5>
                <textarea id="textArea" name="w3review" rows="4" cols="50"></textarea>
                </div> 



                <button type="submit" className="btn btn-lg btn-dark w-100" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
