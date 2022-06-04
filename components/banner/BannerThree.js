import React, { Component } from "react";
import PropTypes from "prop-types";
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

import Image from 'next/image'

import animationImg1 from '../../public/img/1.png'
import animationImg2 from '../../public/img/2.png'
import animationImg3 from '../../public/img/1.png'
import animationImg4 from '../../public/img/5.png'
import animationImg5 from '../../public/img/6.png'

class BannerThree extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <>
                <div id="home" className="main-banner item-bg-two">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="hero-content">
                                    <h5>{this.props.toptitle}</h5>

                                    <h1>
                                        {this.props.mainlefttitle} {' '}
                                        <span>{this.props.mainspantitle}</span> {' '}
                                        {this.props.mainrighttitle}
                                    </h1>

                                    <p>{this.props.content}</p>

                                    <a href={this.props.leftbtnlink} className="btn btn-primary">
                                        {this.props.leftbtn}
                                    </a>

                                    <ModalVideo
                                        channel="youtube"
                                        isOpen={this.state.isOpen}
                                        videoId={this.props.videoId}
                                        onClose={() =>
                                            this.setState({
                                                isOpen: false
                                            })
                                        }
                                    />

                                    <button onClick={this.openModal} className="video-btn">
                                        <i className="icofont-play-alt-2" /> {this.props.videobtn}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animation-box1">
                        <Image src={animationImg1} alt="sliderimage" />
                    </div>
                    <div className="animation-box2">
                        <Image src={animationImg2} alt="sliderimage" />
                    </div>
                    <div className="animation-box3">
                        <Image src={animationImg3} alt="sliderimage" />
                    </div>
                    <div className="animation-box4">
                        <Image src={animationImg4} alt="sliderimage" />
                    </div>
                    <div className="animation-box6">
                        <Image src={animationImg5} alt="sliderimage" />
                    </div>
                    <div className="wave_box">
                        <div className="wave" />
                        <div className="wave" />
                    </div>
                </div>
            </>
        );
    }
}

BannerThree.propTypes = {
    BannerThreeData: PropTypes.array
};

BannerThree.defaultProps = {
    toptitle: "WE ARE CREATIVE",
    mainlefttitle: "THE BEST",
    mainspantitle: "DIGITAL",
    mainrighttitle: "AGENCY",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    leftbtn: "Get Started",
    leftbtnlink: "#",
    videoId: "vr0qNXmkUJ8",
    videobtn: "Watch Video"
};

export default BannerThree;
