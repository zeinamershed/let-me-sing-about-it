import React from 'react';

const HomePage = () => {
	return (
		<div>
			<div className="home-page-btn">
				<button className="btn-all-songs">
					<h2>All Songs</h2>
					<p>A list of all the songs we think you'll like!</p>
				</button>
				<button className="btn-all-decades">
					<h2>By Decade</h2>
					<p>Because sometimes, you just want that vibe!</p>
				</button>
				<button className="btn-rdm-songs">
					<h2>Random Song</h2>
					<p>Feeling risky? Try a random song!</p>
				</button>
				<button className="btn-fav-songs">
					<h2>Favorite Songs</h2>
					<p>The ones you love to sing the most!</p>
				</button>
			</div>
		</div>
	);
};

export default HomePage;
