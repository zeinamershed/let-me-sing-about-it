import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllSongsPage = ({ songs }) => {
	return (
		<div className="all-songs-div">
			{songs &&
				songs.map((oneSong) => (
					<div key={oneSong.id}>
						<hr className="hr-all-songs" />
						<div className="all-songs-info-container">
							<div className="all-songs-song-info">
								<h2>{oneSong.song}</h2>
								<p>
									<strong>Artist:</strong> {oneSong.artist}
								</p>
								<p>
									<strong>Genre:</strong> {oneSong.genre}
								</p>
								<p>
									<strong>Decade:</strong> {oneSong.decade}
								</p>
							</div>
						</div>
						<Link to={`/songs/${oneSong.id}`}>
						<button className="song-details-btn">Details</button>
            </Link>
						<button className="favorites-btn">Add to Favorites</button>
						<button className="edit-btn">Edit</button>
						<button className="delete-btn">Delete</button>
					</div>
				))}
		</div>
	);
};

export default AllSongsPage;
