import React, { Component } from "react";
import PropTypes from "prop-types";
import Image from 'next/image'

import featuresImage from '../public/img/features-img.jpg'
import animationimg1 from '../public/img/3.png'
import animationimg2 from '../public/img/4.png'
import animationimg3 from '../public/img/1.png'

export class Features extends Component {
	render() {
		//Start Features Loop
		const featuresdata = this.props.featuresData.map((features, index) => (
			<div className="single-features" key={index}>
				<div className="icon">
				    <i className={features.icon} />
				</div>
				<h3>{features.title}</h3>
				<p>{features.content}</p>
			</div>
		));
		//End Features Loop

		return (
			<>
				<section className="features-area ptb-100">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="features-img">
									<Image 
										src={featuresImage} 
										alt="features" 
									/>
								</div>
							</div>

							<div className="col-lg-6 col-md-12 col-sm-12">{featuresdata}</div>
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
				</section>
			</>
		);
  	}
}

Features.PropsTypes = {
	animationimg1: PropTypes.string,
	animationimg2: PropTypes.string,
	animationimg3: PropTypes.string,
	featuresImage: PropTypes.string,
	featuresData: PropTypes.array
};

Features.defaultProps = {
	featuresData: [
		{
			icon: "icofont-dashboard-web",
			title: "Fully Responsive",
			content:
				"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
			},
		{
			icon: "icofont-chart-bar-graph",
			title: "Digital Marketing",
			content:
				"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
			},
		{
			icon: "icofont-anchor",
			title: "Clean & Unique Design",
			content:
				"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
		}
	]
};
export default Features;