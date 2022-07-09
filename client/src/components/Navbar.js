import {
	NavbarContainer,
	NavbarLinkContainer,
	NavbarLink
} from '../styles/navbar.style';

function Navbar() {
	return (
		<NavbarContainer className="container-fluid">
			<NavbarLinkContainer className="container">
				<NavbarLink className="text-success" to="/">Home</NavbarLink>
				<NavbarLink className="text-success" to="/login">Login</NavbarLink>
				<NavbarLink className="text-success" to="/signup">Signup</NavbarLink>
				<NavbarLink className="text-success" to="/booking">Booking</NavbarLink>
				<NavbarLink className="text-success" to="/services">Services</NavbarLink>
				<NavbarLink className="text-success" to="/about">About Us</NavbarLink>
				<NavbarLink className="text-success" to="/">Support</NavbarLink>
				<NavbarLink className="text-success" to="/cust_land">Customer Landing<br/>Page After<br/>Sign In/Sign Up</NavbarLink>
			</NavbarLinkContainer>
		</NavbarContainer>
	);
}

export default Navbar;