import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

import animationimg1 from '../public/img/3.png'
import animationimg2 from '../public/img/4.png'
import animationimg3 from '../public/img/1.png'

export class Work extends Component {
    render() {
        return (
            <>
                <section className="work-with-us ptb-100">
                    <div className="container">
                        <h3>{this.props.workTitle}</h3>
                        <span>{this.props.worksmallTitle}</span>
                        <a href={this.props.btnlink} className="btn btn-primary">{this.props.btnName}</a>
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
                </section>
            </>
        );
    }
}

Work.PropsTypes = {
    workTitle: PropTypes.string,
    worksmallTitle: PropTypes.string,
    btnlink: PropTypes.string,
}

Work.defaultProps = {
    workTitle: "Want to work with us?",
    worksmallTitle: "Lets talk about project",
    btnlink: "#contact",
    btnName: "get Started",
}

export default Work