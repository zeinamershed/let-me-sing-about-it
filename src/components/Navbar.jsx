import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faHouse,
	faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = ({ currUser, setCurrUser }) => {
	function handleLogout() {
		setCurrUser(null);
	}
	return (
		<nav className="nav">
			<div className="navbar-icons">
				<NavLink to="/">
					<FontAwesomeIcon icon={faHouse} /> <span>Home Page</span>
				</NavLink>
				<img className="logo" src={logo} alt='logo-let-me-sing-about-it' />
				{currUser ? (
					<span>
						<button className="logout-btn" onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} />Logout</button>
					</span>
				) : (
					<span>
            <FontAwesomeIcon icon={faUser} /><span> </span>
						<NavLink to="/signup">Sign Up</NavLink> /{' '}
						<NavLink to="/login">Login</NavLink>
					</span>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
