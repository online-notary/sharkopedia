import React, { Component } from 'react';
import PropTypes from "prop-types";
import Slider from "react-slick";
import Image from 'next/image'

import aboutImage from '../public/img/about-img.png'

import animationImg1 from '../public/img/3.png'
import animationImg2 from '../public/img/4.png'
import animationImg3 from '../public/img/1.png'
import animationImg4 from '../public/img/6.png'
 
export class About extends Component {
  render() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section 
                id="about" 
                className="about-area ptb-100 bg-f9f9f9"
            >
                <div className="container">
                    <div className="row">
                        <div className="about-image">
                            <Image 
                                src={aboutImage} 
                                alt="about-img" 
                            />
                        </div>
                        
                        <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6">
                            <div className="row">
                                <Slider {...settings}>
                                    <div className="col-lg-12">
                                        <div className="about-title">
                                            <h3>{this.props.skillToptitle} <b>{this.props.skillToptitlespan}</b></h3>
                                            <h5>{this.props.skillTitle} <span>{this.props.skillTitlespan}</span></h5>
                                            <p>{this.props.skillContent}</p>
                                        </div>

                                        <div className="our-skill">
                                            <div className="single-progress">
                                                <h3 className="progress-title">{this.props.progressTitle1}</h3>
                                                <div className="progress">
                                                    <div className="progress-bar" style={{width:'95%'}}>
                                                        <div className="progress-value">{this.props.progressValue1}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="single-progress">
                                                <h3 className="progress-title">{this.props.progressTitle2}</h3>
                                                <div className="progress">
                                                    <div className="progress-bar" style={{width:'95%'}}>
                                                        <div className="progress-value">{this.props.progressValue2}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="single-progress">
                                                <h3 className="progress-title">{this.props.progressTitle3}</h3>
                                                <div className="progress">
                                                    <div className="progress-bar" style={{width:'95%'}}>
                                                        <div className="progress-value">{this.props.progressValue3}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="single-progress">
                                                <h3 className="progress-title">{this.props.progressTitle4}</h3>
                                                <div className="progress">
                                                    <div className="progress-bar" style={{width:'92%'}}>
                                                        <div className="progress-value">{this.props.progressValue4}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="about-title">
                                            <h3>{this.props.item2topTitle} <b>{this.props.item2topTitlespan}</b></h3>
                                            <h5>{this.props.item2Title}<span> {this.props.item2Titlespan}</span></h5>
                                            <p>{this.props.item2ContentTop}</p>
                                        </div>
                                        
                                        <div className="our-mission">
                                            <p>{this.props.item2ContentMiddle}</p>
                                            <p>{this.props.item2ContentBottom}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="about-title">
                                            <h3>{this.props.item3TopTitle} <b>{this.props.item3TopTitleSpan}</b></h3>
                                            <h5>{this.props.item3Title} <span>{this.props.item3TitleSpan}</span></h5>
                                            <p>{this.props.item3Content}</p>
                                        </div>

                                        <div className="why-choose-us">
                                            <div className="row m-0">
                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo1} />
                                                        <h5>{this.props.log2Title}</h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo2} />
                                                        <h5>{this.props.log2Title}</h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo3} />
                                                        <h5>{this.props.log3Title}</h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo4} />
                                                        <h5>{this.props.log4Title}</h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo5} />
                                                        <h5>{this.props.log5Title}</h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo6} />
                                                        <h5>{this.props.log6Title}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="animation-box1">
                    <Image src={animationImg1} alt="styleimage" />
                </div>
                <div className="animation-box2">
                    <Image src={animationImg2} alt="styleimage" />
                </div>
                <div className="animation-box3">
                    <Image src={animationImg3} alt="styleimage" />
                </div>
                <div className="animation-box6">
                    <Image src={animationImg4} alt="styleimage" />
                </div>
            </section>
        </>
    );
  }
}
About.propTypes = {
    skillToptitle: PropTypes.string,
    skillToptitlespan: PropTypes.string,
    skillTitle: PropTypes.string,
    skillTitlespan: PropTypes.string,
    skillContent: PropTypes.string,
    progressTitle1: PropTypes.string,
    progressValue1: PropTypes.string,
    progressTitle2: PropTypes.string,
    progressValue2: PropTypes.string,
    progressTitle3: PropTypes.string,
    progressValue3: PropTypes.string,
    progressTitle4: PropTypes.string,
    progressValue4: PropTypes.string,

    item2topTitle: PropTypes.string,
    item2topTitlespan: PropTypes.string,
    item2Title: PropTypes.string,
    item2Titlespan: PropTypes.string,
    item2ContentTop: PropTypes.string,
    item2ContentMiddle: PropTypes.string,
    item2ContentBottom: PropTypes.string,

    item3TopTitle: PropTypes.string,
    item3TopTitleSpan: PropTypes.string,
    item3Title: PropTypes.string,
    item3TitleSpan: PropTypes.string,
    item3Content: PropTypes.string,
    logo1: PropTypes.string,
    logo2: PropTypes.string,
    logo3: PropTypes.string,
    logo4: PropTypes.string,
    logo5: PropTypes.string,
    logo6: PropTypes.string,
    log1Title: PropTypes.string,
    log2Title: PropTypes.string,
    log3Title: PropTypes.string,
    log4Title: PropTypes.string,
    log5Title: PropTypes.string,
    log6Title: PropTypes.string,


}
About.defaultProps ={
    skillToptitle: "About",
    skillToptitlespan: "Exolot",
    skillTitle: "We Are Digital",
    skillTitlespan: "Marketing & Branding",
    skillContent: "Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida.",
    progressTitle1: "Branding",
    progressValue1: "95%",
    progressTitle2: "Marketing",
    progressValue2: "95%",
    progressTitle3: "Web Design",
    progressValue3: "95%",
    progressTitle4: "Web Development",
    progressValue4: "92%",
 
    item2topTitle: "Know About Our",
    item2topTitlespan: "Mission",
    item2Title: "We Are Digital",
    item2Titlespan: "Marketing & Branding",
    item2ContentTop: "Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida.",
    item2ContentMiddle: "Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    item2ContentBottom: "Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida.",
 
    item3TopTitle: "Why Choose",
    item3TopTitleSpan: "Us",
    item3Title: "We Are Digital",
    item3TitleSpan: "Marketing & Branding",
    item3Content: "Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida.",
    logo1: "icofont-laptop-alt",
    log1Title: "Retina Ready",
    logo2: "icofont-headphone-alt-2",
    log2Title: "Perfect Design",
    logo3: "icofont-laptop-alt",
    log3Title: "Friendly Support",
    logo4: "icofont-laptop-alt",
    log4Title: "Unique Design",
    logo5: "icofont-headphone-alt-2",
    log5Title: "Expert Team",
    logo6: "icofont-laptop-alt",
    log6Title: "SEO & Marketing",

}
export default About;