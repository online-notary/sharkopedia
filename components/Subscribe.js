import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return(
            <>
                <div className="subscribe-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 col-sm-12">
                                <p><b>Join the Exolot!</b> Sign up for the latest updates and news.</p>
                            </div>

                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <div className="newsletter-form">
                                    <input 
                                        type="email" 
                                        placeholder="name@gmail.com" 
                                        className="form-control" 
                                        required 
                                    />
                                    <button>
                                        <i className="icofont-send-mail"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Subscribe;


