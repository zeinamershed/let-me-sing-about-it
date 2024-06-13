import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrash,
	faPenToSquare,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import Search from '../components/Search';

const AllSongsPage = ({
	songs,
	addFavorite,
	removeFavorite,
	currUser,
	deleteSong,
}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredSongs, setFilteredSongs] = useState(songs);

	useEffect(() => {
		const result = songs.filter(
			(song) =>
				song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
				song.genre.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredSongs(result);
	}, [searchTerm, songs]);

	return (
		<div className="for-all-divs">
			<div className='search-bar'>
			<FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
			<Search
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/></div>

			{filteredSongs &&
				filteredSongs.map((oneSong) => (
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
							<div className="h2-one-song">
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
										<Link to={`/edit-song/${oneSong.id}`}>
											<button className="for-all-songs-btn">
												<FontAwesomeIcon icon={faPenToSquare} />
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
