import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({currUser}) => {
	return (
		<div>
			<div className="home-page-btn">
				<Link to="/songs">
					<button className="btn-all-songs">
						<h2>All Songs</h2>
						<p>A list of all the songs we think you'll like!</p>
					</button>
				</Link>
				<Link to='/decades'>
					<button className="btn-all-decades">
						<h2>By Decade</h2>
						<p>Because sometimes, you just want THAT vibe!</p>
					</button>
				</Link>
				<Link to="/random">
					<button className="btn-rdm-songs">
						<h2>Random Song</h2>
						<p>Feeling risky? Try a random song!</p>
					</button>
				</Link>
				<Link to='/favorites'>
					<button className="btn-fav-songs">
						<h2>Favorite Songs</h2>
						<p>The ones you love to sing the most!</p>
					</button>
				</Link>
				{currUser?(<Link to='/add'>
					<button className="btn-add-songs">
						<h2>Add your owns</h2>
						<p>Follow the call of the disco ball</p>
					</button>
				</Link>):(<span> </span>)}
				
			</div>
		</div>
	);
};

export default HomePage;
