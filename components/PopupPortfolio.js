import React from "react";
import Lightbox from "react-image-lightbox";
import Image from 'next/image'

import portfolioImg1 from '../public/img/portfolio-img1.jpg'
import portfolioImg2 from '../public/img/portfolio-img2.jpg'
import portfolioImg3 from '../public/img/portfolio-img3.jpg'
import portfolioImg4 from '../public/img/portfolio-img4.jpg'
import portfolioImg5 from '../public/img/portfolio-img5.jpg'
import portfolioImg6 from '../public/img/portfolio-img6.jpg'

const images = [
    "/img/portfolio-img1.jpg",
    "/img/portfolio-img2.jpg",
    "/img/portfolio-img3.jpg",
    "/img/portfolio-img4.jpg",
    "/img/portfolio-img5.jpg",
    "/img/portfolio-img6.jpg"
];

class LightboxPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-work">
                                <figure>
                                    <div className="work-image">
                                        <Image
                                            src={portfolioImg1}
                                            alt="Gallery"
                                            className="img-fluid"
                                        />
                                        <span 
                                            href= "ll"
                                            onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                                            className="popup-btn">
                                            <i className="icofont-search-2"/>
                                        </span>
                                    </div>
                                    <h3>BUSINESS CARD DEISGN</h3>
                                </figure>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-work">
                                <figure>
                                    <div className="work-image">
                                        <Image
                                            src={portfolioImg2}
                                            alt="Gallery"
                                            className="img-fluid"
                                        />
                                        <span 
                                            onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                                            className="popup-btn">
                                            <i className="icofont-search-2" />
                                        </span>
                                    </div>
                                    <h3>BUSINESS CARD DEISGN</h3>
                                </figure>
                            </div>
                        </div>
                                    
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-work">
                                <figure>
                                    <div className="work-image">
                                        <Image
                                            src={portfolioImg3}
                                            alt="Gallery"
                                            className="img-fluid"
                                        />
                                        <span 
                                            href= "ll"
                                            onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                                            className="popup-btn">
                                            <i className="icofont-search-2"/>
                                        </span>
                                    </div>
                                    <h3>BUSINESS CARD DEISGN</h3>
                                </figure>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-work">
                                <figure>
                                    <div className="work-image">
                                        <Image
                                            src={portfolioImg4}
                                            alt="Gallery"
                                            className="img-fluid"
                                        />
                                        <span 
                                            href= "ll"
                                            onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                                            className="popup-btn">
                                            <i className="icofont-search-2"/>
                                        </span>
                                    </div>
                                    <h3>BUSINESS CARD DEISGN</h3>
                                </figure>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-work">
                                <figure>
                                    <div className="work-image">
                                        <Image
                                            src={portfolioImg5}
                                            alt="Gallery"
                                            className="img-fluid"
                                        />
                                        <span 
                                            href= "ll"
                                            onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                                            className="popup-btn">
                                            <i className="icofont-search-2"/>
                                        </span>
                                    </div>
                                    <h3>BUSINESS CARD DEISGN</h3>
                                </figure>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-work">
                                <figure>
                                    <div className="work-image">
                                        <Image
                                            src={portfolioImg6}
                                            alt="Gallery"
                                            className="img-fluid"
                                        />
                                        <span 
                                            onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                                            className="popup-btn">
                                            <i className="icofont-search-2"/>
                                        </span>
                                    </div>
                                    <h3>BUSINESS CARD DEISGN</h3>
                                </figure>
                            </div>
                        </div>  
                    </div>
                   
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            imageTitle={photoIndex + 1 + "/" + images.length}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length
                                })
                            }
                        />
                    )}
                </div>
            </>
        );
    }
}

export default LightboxPage;