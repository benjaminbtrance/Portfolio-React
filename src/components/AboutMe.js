import React from 'react';
import AboutMeImage from '../images/benny1.JPG';

const AboutMe = () => {
	return (
		<section id="about-me" className="container mt-3 pb-3">
			<div className="post-heading text-center pb-3">
				<h1 className="display-4 font-weight-bold">About Me</h1>
				<hr className="w-50 mx-auto" />
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-12 pb-3">
					<img
						src={AboutMeImage}
						alt="A picture of Benjamin"
						className="img-fluid"
					/>
				</div>

				<div className="col-lg-6 col-md-6 col-12 pb-3">
					<p>
						A self-motivated Full Stack Web Developer efficient at combining
						creativity and problem solving to develop user-friendly
						applications. Throughout my life both on a professional and
						educational level, I have established myself as a team player,
						knowing how to communicate with others. Known among colleagues for
						strong work ethics and attention to detail no matter the complexity
						of the project. Seeking to leverage broad development experience and
						hands-on technical expertise in a challenging role as a Full-stack
						Developer.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
