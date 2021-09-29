import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
} from 'reactstrap';

const ProfolioNav = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<Navbar className="navbar navbar-expand-lg navbar-light bg-dark">
			<Container>
				<NavbarBrand className="logo">BBT</NavbarBrand>
				<NavbarToggler className="hamburger" onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="navbar-nav ms-auto" navbar>
						<NavItem className="active">
							<NavLink href="#">Home</NavLink>
						</NavItem>
						<NavItem className="active">
							<NavLink href="#">About Me</NavLink>
						</NavItem>
						<NavItem className="active">
							<NavLink href="#">Portfolio</NavLink>
						</NavItem>
						<NavItem className="active">
							<NavLink href="#">Contacts</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
};

export default ProfolioNav;
