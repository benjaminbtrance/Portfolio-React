import React from 'react';
import AboutMeImage from '../images/benny1.JPG';

const AboutMe = () => {
	return (
		<section id="about-me" class="container mt-3 pb-3">
			<div class="post-heading text-center pb-3">
				<h1 class="display-4 font-weight-bold">About Me</h1>
				<hr class="w-50 mx-auto" />
			</div>
			<div class="row">
				<div class="col-lg-6 col-md-6 col-12 pb-3">
					<img
						src={AboutMeImage}
						alt="A picture of Benjamin"
						class="img-fluid"
					/>
				</div>

				<div class="col-lg-6 col-md-6 col-12 pb-3">
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
