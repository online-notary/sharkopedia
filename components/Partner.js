import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Image from 'next/image'

class Partners extends Component {
    render() {

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,
          
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 922,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                    }
                } 
            ]
        };

        // Partner loop start
        const partnerData = this.props.partnersData.map((partner, index) => (
            <div className="col-lg-12 col-md-12" key={index}>
                <a href={partner.partnerLink} target="_blank" rel='noreferrer'>
                    <Image 
                        src={partner.partnerLogo} 
                        alt="partner" 
                        width={140}
                        height={100}
                    />
                </a>
            </div>
        ));
        // Partner loop END

        return (
            <>
                <div className="partner-area ptb-100 bg-f9f9f9">
                    <div className="container">
                        <div className="row">
                            <Slider {...settings}>
                                {partnerData}
                            </Slider>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Partners.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    partnersData: PropTypes.array
};

Partners.defaultProps = {
    sectionName: "",
    sectionTitle: "",
    sectionDescription: "",
    partnersData: [
        {
            partnerLogo: "/img/partner-1.png",
            partnerLink: "#0"
        },
        {
            partnerLogo: "/img/partner-2.png",
            partnerLink: "#0"
        },
        {
            partnerLogo: "/img/partner-3.png",
            partnerLink: "#0"
        },
        {
            partnerLogo: "/img/partner-4.png",
            partnerLink: "#0"
            },
        {
            partnerLogo: "/img/partner-5.png",
            partnerLink: "#0"
        },
        {
            partnerLogo: "/img/partner-6.png",
            partnerLink: "#0"
        },
        {
            partnerLogo: "/img/partner-3.png",
            partnerLink: "#0"
        },
        {
            partnerLogo: "/img/partner-4.png",
            partnerLink: "#0"
        }
    ]
};
export default Partners;
