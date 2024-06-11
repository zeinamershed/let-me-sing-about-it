import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faHouse,
	faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

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
				<h1>Let Me Sing About It</h1>
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
