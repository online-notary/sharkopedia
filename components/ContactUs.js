import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactUs = () => {

    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section id="contact" className="contact-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Contact <b>Us</b></h2>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="icofont-location-pin"></i>
                            </div>
                            <h4>Address</h4>
                            <p>Exercisplan 4, 111 49 <br /> Stockholm, Sweden</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="icofont-mail"></i>
                            </div>
                            <h4>Email</h4>
                            <p><a href="mailto:info@exolot.com">Info@exolot.com</a></p>
                            <p><a href="mailto:support@exolot.com">support@exolot.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="icofont-phone"></i>
                            </div>
                            <h4>Phone</h4>
                            <p><a href="tel:+444587458">+44 4587 458</a></p>
                            <p><a href="tel:+444587458">+44 4587 458</a></p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="get-in-touch">
                            <h3>Get in Touch</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" className="icofont-facebook"></a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" className="icofont-twitter"></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" className="icofont-instagram"></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="icofont-linkedin"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Name" 
                                                className="form-control" 
                                                value={contact.name}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Email" 
                                                className="form-control" 
                                                value={contact.email}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="number" 
                                                placeholder="Phone number" 
                                                className="form-control" 
                                                value={contact.number}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Subject" 
                                                className="form-control" 
                                                value={contact.subject}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea 
                                                name="text" 
                                                cols="30" 
                                                rows="6" 
                                                placeholder="Write your message..." 
                                                className="form-control" 
                                                value={contact.text}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" className="btn btn-primary">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;