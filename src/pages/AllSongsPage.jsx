import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const AllSongsPage = ({
	songs,
	addFavorite,
	removeFavorite,
	currUser,
	deleteSong
}) => {
	return (
		<div className="for-all-divs">
			{songs &&
				songs.map((oneSong) => (
					<div
						key={oneSong.id}
						className="all-songs-info-container"
					>
						<Link
							to={`/songs/${oneSong.id}`}
							className="links-songs"
						>
							<div>
								<div className="all-songs-song-info">
									<h2>{oneSong.title}</h2>
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
						</Link>
						{currUser && (
							<div>
								{currUser.favorites.includes(oneSong.id) ? (
									<button
										onClick={() => removeFavorite(oneSong.id)}
										className="for-all-songs-btn"
									>
										<FontAwesomeIcon icon={solidHeart} />
									</button>
								) : (
									<button
										onClick={() => addFavorite(oneSong.id)}
										className="for-all-songs-btn"
									>
										<FontAwesomeIcon icon={regularHeart} />
									</button>
								)}
								{currUser.id === oneSong.uploadedBy.userId ? (
									<div>
										<Link to={`/edit-song/${oneSong.id}`} >
											<button className="for-all-songs-btn" ><FontAwesomeIcon icon={faPenToSquare} />
											</button>
										</Link>


										<button
											onClick={() => deleteSong(oneSong.id)}
											className="for-all-songs-btn"
										>
											<FontAwesomeIcon icon={faTrash} />
										</button>
									</div>
								) : (
									<span></span>
								)}
							</div>
						)}
					</div>
				))}
				<br />
				<Link to="/">
						<button className="random-btn">Back</button>
					</Link>
		</div>
	);
};

export default AllSongsPage;
