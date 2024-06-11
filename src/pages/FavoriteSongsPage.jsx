import React from 'react';
import { NavLink } from 'react-router-dom';
import logogrey from '../assets/images/logogrey.png';
import stars from '../assets/images/stars.png';

const FavoriteSongsPage = ({ currUser, songs }) => {
	if (!currUser) {
		return (
			<div className="for-all-divs">
				<p>You need to be logged in to access this feature</p>
			</div>
		);
	}

	const favoriteSongs = songs.filter((song) =>
		currUser.favorites.includes(song.id)
	);

	return (
		<div className="for-all-divs">
			<div>
				{favoriteSongs.length > 0 ? (
					favoriteSongs.map((song) => (
						<NavLink
							to={`/songs/${song.id}`}
							key={song.id}
						>
							<div className="all-songs-info-container">
								<div className="fav-songs-specific">
                  <div>
									<img
										src={logogrey}
										alt="logo of Let me Sing About it Grey"
										className="logo-favs"
									/></div>
									<div className="all-songs-song-info">
										<h2>{song.title}</h2>
										<p>
											<strong>Artist:</strong> {song.artist}
										</p>
										<p>
											<strong>Genre:</strong> {song.genre}
										</p>
									</div>
                  <div>
									<img
										src={stars}
										alt="little stars"
										className="logo-favs"
									/></div>
								</div>
							</div>
						</NavLink>
					))
				) : (
					<p>You have no favorite songs yet.</p>
				)}
			</div>
		</div>
	);
};

export default FavoriteSongsPage;
