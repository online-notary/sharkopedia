import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import dynamic from 'next/dynamic';
const VisibilitySensor = dynamic(import('react-visibility-sensor'))
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

import Image from 'next/image'

import animationImg1 from '../../public/img/1.png'
import animationImg2 from '../../public/img/2.png'
import animationImg3 from '../../public/img/1.png'
import animationImg4 from '../../public/img/5.png'
import animationImg5 from '../../public/img/6.png'
import animationImg6 from '../../public/img/7.png'

class HomeSlides extends Component {
    
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

        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5500,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
        };

        // Home Slides loop start
        const homeslidesdata = this.props.homeslidesData.map(
            (homeslides, index) => (
                <div key={index}>
                    <div className={homeslides.bgImgClass}>
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="hero-content">
                                                <h5
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInDown slow opacityOne"
                                                            : "opacityZero"
                                                    }
                                                >
                                                    {homeslides.toptitle}
                                                </h5>
                                                
                                                <h1
                                                    className={
                                                        isVisible
                                                        ? "animated fadeInUp slow opacityOne"
                                                        : "opacityZero"
                                                    }
                                                >
                                                    {homeslides.mainlefttitle} {" "}
                                                    <span>
                                                        {
                                                            homeslides.mainspantitle
                                                        }
                                                    </span> {" "}
                                                    {homeslides.mainrighttitle}
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible
                                                            ? "animated zoomIn Slow opacityOne"
                                                            : "opacityZero"
                                                    }
                                                >
                                                    {homeslides.content}
                                                </p>
                                                
                                                <a
                                                    href={
                                                        homeslides.leftbtnlink
                                                    }
                                                    className={
                                                        isVisible
                                                            ? "btn btn-primary animated fadeInDown slow opacityOne"
                                                            : " btn btn-primary opacityZero"
                                                    }
                                                >
                                                    {homeslides.leftbtn}
                                                </a>
                                                
                                                <button onClick={this.openModal} className={
                                                    isVisible
                                                        ? "video-btn animated fadeInDown slow opacityOne"
                                                        : "video-btn opacityZero"
                                                    }>
                                                    <i className="icofont-play-alt-2" /> {homeslides.videobtn}
                                                </button>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>

                        <div className="animation-box1">
                            <Image
                                src={animationImg1}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box2">
                            <Image
                                src={animationImg2}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box3">
                            <Image
                                src={animationImg3}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box4">
                            <Image
                                src={animationImg4}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box6">
                            <Image
                                src={animationImg5}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box7">
                            <Image
                                src={animationImg6}
                                className="rotateme"
                                alt="sliderimage"
                            />
                        </div>
                    </div>
                </div>
            )
        );
        //Home Slides END

        return (
            <>
                <div id="home">
                    <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId={this.props.homeslidesData[0].videoId}
                        onClose={() =>
                            this.setState({
                                isOpen: false
                            })
                        }
                    />

                    <Slider className="home-slides" {...settings}>
                        {homeslidesdata}
                    </Slider>
                </div>
            </>
        );
    }
}

HomeSlides.propTypes = {
    homeslidesData: PropTypes.array
};

HomeSlides.defaultProps = {
    homeslidesData: [
        {
            bgImgClass: "main-banner item-bg-one",
            toptitle: "WE ARE CREATIVE",
            mainlefttitle: "THE BEST",
            mainspantitle: "DIGITAL",
            mainrighttitle: "AGENCY",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            leftbtn: "Get Started",
            leftbtnlink: "#contact",
            videobtn: "Watch Now",
            videoId: "vr0qNXmkUJ8",
        },
        {
            bgImgClass: "main-banner item-bg-two",
            toptitle: "WE ARE CREATIVE",
            mainlefttitle: "THE BEST",
            mainspantitle: "DIGITAL",
            mainrighttitle: "AGENCY",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            leftbtn: "Get Started",
            leftbtnlink: "#contact",
            videobtn: "Watch Now",
            videoId: "vr0qNXmkUJ8",
        },
        {
            bgImgClass: "main-banner item-bg-three",
            toptitle: "WE ARE CREATIVE",
            mainlefttitle: "THE BEST",
            mainspantitle: "DIGITAL",
            mainrighttitle: "AGENCY",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            leftbtn: "Get Started",
            leftbtnlink: "#contact",
            videobtn: "Watch Now",
            videoId: "vr0qNXmkUJ8",
        }
    ]
};

export default HomeSlides;