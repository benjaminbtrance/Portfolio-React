import React from 'react';
import Typed from 'react-typed';

const Header = () => {
	return (
		<div id="page-top" className="header-wraper">
			<div className="main-info">
				<h1>Welcome to My Webpage</h1>
				<Typed
					className="typed-text"
					strings={[
						'Hi,',
						'I am Benjamin Tran',
						'I am a Full Stack Web Developer',
					]}
					typeSpeed={40}
					backSpeed={60}
					loop
				/>
				<a className="btn btn-header" href="#about-me">
					About Me
				</a>
			</div>
		</div>
	);
};

export default Header;
