import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";

import Image from 'next/image'

export class Feadback extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
  
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                } 
            ]
        };

        //Start Feadback Loop
        const feadbackdata = this.props.feadbacksData.map((feadback, index ) =>(
            <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
                <div className="single-feedback mlr-15">
                    <div className="client-info">
                        <div className="img">
                            <Image src={feadback.image} alt="client" width={100} height={100} />
                        </div>
                        <h4>{feadback.name}</h4>
                        <span>{feadback.profession}</span>
                    </div>

                    <p>{feadback.content}</p>

                    <i className="icofont-quote-right" />
                </div>
            </div>
        ));
        //End Feadback Loop

        return (
            <>
                <section className="feedback-area ptb-100 bg-f9f9f9">
                    <div className="container">
                        <div className="section-title">
                            <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                            <p>{this.props.sectionContent}</p>
                        </div>

                        <div className="row">
                            <Slider {...settings}>
                                {feadbackdata}
                            </Slider>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
Feadback.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    feadbacksData: PropTypes.array,

}
Feadback.defaultProps = {
    sectionTitle: "Expert",
    sectionTitleSpan: "Feadback",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    feadbacksData:[
        {
            image: "/img/client-avatar1.jpg",
            name: "Josh Buttler",
            profession: "Web Developer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
            image: "/img/client-avatar2.jpg",
            name: "Josh Buttler",
            profession: "Web Developer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
            image: "/img/client-avatar3.jpg",
            name: "Josh Buttler",
            profession: "Web Developer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
            image: "/img/client-avatar3.jpg",
            name: "Josh Buttler",
            profession: "Web Developer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        }
    ]

}
export default Feadback
