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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
						excepturi ipsam veniam totam vel doloremque eaque quis explicabo
						eius exercitationem quos magni sunt, quae necessitatibus nobis
						minima nisi minus eligendi non? Illo ad aut, dicta modi aliquid
						aliquam temporibus, ipsum debitis sapiente iusto consequatur
						consectetur possimus minima ratione cumque suscipit nihil tempore
						nisi vero dolorum consequuntur atque officia dolores molestias! Sed,
						possimus. Consequatur cum reprehenderit sit magnam, nam dolore
						temporibus eum aliquam, alias et iure officia, doloremque obcaecati
						magni modi eligendi. Quasi, expedita fugiat. Molestiae eveniet enim
						numquam, nisi tenetur commodi dolorum amet iusto. Provident animi
						quia alias veniam obcaecati?
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
