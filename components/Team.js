import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Image from 'next/image'

import animationimg1 from '../public/img/3.png'
import animationimg2 from '../public/img/4.png'
import animationimg3 from '../public/img/1.png'
import animationimg4 from '../public/img/5.png'
  
export class Team extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
          
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 922,
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

        // Start Team Loop
        const teamdata = this.props.teamsData.map((team, index ) =>(
            <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
                <div className="single-team plr-15">
                    <Image 
                        src={team.img} 
                        alt="team-img" 
                        width={300}
                        height={300}
                    />
                  
                    <ul className="member-social-links wow fadeInUp">
                        <li>
                            <a 
                                href={team.sociallink1} 
                                className={team.socialicon1} 
                                target="_blank" 
                                rel='noreferrer'
                            ></a>
                        </li>
                        <li>
                            <a 
                                href={team.sociallink2} 
                                className={team.socialicon2} 
                                target="_blank" 
                                rel='noreferrer'
                            ></a>
                        </li>
                        <li>
                            <a 
                                href={team.sociallink3} 
                                className={team.socialicon3} 
                                target="_blank" 
                                rel='noreferrer'
                            ></a>
                        </li>
                        <li>
                            <a 
                                href={team.sociallink4} 
                                className={team.socialicon4} 
                                target="_blank" 
                                rel='noreferrer'
                            >
                            </a>
                        </li>
                    </ul>
                    
                    <h3>{team.name}</h3>
                    <span>{team.profession}</span>
                </div>
            </div>
        ));
        // End Team Loop

        return (
            <>
                <section id="team" className="team-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                            <p>{this.props.sectionContent}</p>
                        </div>

                        <div className="row">
                            <Slider {...settings}>
                                {teamdata}
                            </Slider>
                        </div>
                    </div>

                    <div className="animation-box1">
                        <Image src={animationimg1} alt="animateimage" />
                    </div>
                    <div className="animation-box2">
                        <Image src={animationimg2} alt="animateimage" />
                    </div>
                    <div className="animation-box3">
                        <Image src={animationimg3} alt="animateimage" />
                    </div>
                    <div className="animation-box4">
                        <Image src={animationimg4} alt="animateimage" />
                    </div>
                </section>
            </>
        );
    }
}

Team.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    teamsData: PropTypes.array,
}

Team.defaultProps = {
    sectionTitle: "Expert",
    sectionTitleSpan: "Team",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",

    teamsData: [
        {
            img: "/img/team-img1.jpg",
            name: "Alex Maxwel",
            profession: "Marketing Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: "/img/team-img2.jpg",
            name: "Steven Smith",
            profession: "Project Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: "/img/team-img3.jpg",
            name: "Maxwel Smith",
            profession: "Web Developer",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: "/img/team-img4.jpg",
            name: "Lucy Doe",
            profession: "UX/UI Designer",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: "/img/team-img1.jpg",
            name: "Alex Maxwel",
            profession: "Marketing Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: "/img/team-img2.jpg",
            name: "Steven Smith",
            profession: "Project Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: "/img/team-img3.jpg",
            name: "Maxwel Smith",
            profession: "Web Developer",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: "/img/team-img4.jpg",
            name: "Lucy Doe",
            profession: "UX/UI Designer",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
        {
            img: "/img/team-img1.jpg",
            name: "Alex Maxwel",
            profession: "Marketing Manager",
            socialicon1: "icofont-facebook",
            sociallink1: "#",
            socialicon2: "icofont-twitter",
            sociallink2: "#",
            socialicon3: "icofont-instagram",
            sociallink3: "#",
            socialicon4: "icofont-linkedin",
            sociallink4: "#",
        },
 
    ]
}
export default Team