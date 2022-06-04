import React, { useState } from "react"
import Link from '../utils/ActiveLink'

const NavBar = () => {
    const [menu, setMenu] = React.useState(true)
    const toggleNavbar = () => {
        setMenu(!menu)
    }
    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });  
    }) 

    // Sidebar Modal
    const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
    const handleToggleSidebarModal = () => {
        setActiveSidebarModal(!isActiveSidebarModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">
                            <span>E</span>xolot
                        </a>
                    </Link>

                    <button 
                        onClick={toggleNavbar} 
                        className={classTwo}
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>

                    <div className={classOne} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li>
                                <Link href="#home" activeClassName="active">
                                    <a onClick={toggleNavbar}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" activeClassName="active">
                                    <a onClick={toggleNavbar}>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" activeClassName="active">
                                    <a onClick={toggleNavbar}>Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#team" activeClassName="active">
                                    <a onClick={toggleNavbar}>Team</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" activeClassName="active">
                                    <a onClick={toggleNavbar}>Portfolio</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#price" activeClassName="active">
                                    <a onClick={toggleNavbar}>Price</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#blog" activeClassName="active">
                                    <a onClick={toggleNavbar}>Blog</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" activeClassName="active">
                                    <a onClick={toggleNavbar}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="others-options d-flex align-items-center">
                        <span onClick={handleToggleSidebarModal}></span>
                    </div>
                </div>
            </nav>
         
            {/* Sidebar */}
            <div className={`sidebar-modal modal right fade ${isActiveSidebarModal ? "" : "show"}`}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={handleToggleSidebarModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="logo">
                                <Link href="/">
                                    <a>.Exo<span>lot.</span></a>
                                </Link>
                            </div>
                            <p>Exolot have much planned for the future, working with great clients and continued software development. If you like to join our team, then we also love to hear from you.</p>
                            
                            <ul className="modal-contact-info">
                                <li>
                                    <i className="icofont-google-map"></i> 
                                    <b>27 Division St</b>New York, NY 10002, USA
                                </li>
                                <li>
                                    <i className="icofont-ui-call"></i> 
                                    <b>+0 (321) 984 754</b>Give us a call
                                </li>
                                <li>
                                    <i className="icofont-envelope"></i> 
                                    <b>exolot@gmail.com</b>24/7 online support
                                </li>
                            </ul>

                            <ul className="social-links">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'>
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank" rel='noreferrer'>
                                        <i className="icofont-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'>
                                        <i className="icofont-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank" rel='noreferrer'>
                                        <i className="icofont-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.pinterest.com/" target="_blank" rel='noreferrer'>
                                        <i className="icofont-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Sidebar */}
        </>
    );
}

export default NavBar;