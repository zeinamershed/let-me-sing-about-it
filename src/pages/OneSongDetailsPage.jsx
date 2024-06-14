import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { Tooltip } from 'react-tooltip';

const OneSongDetailsPage = ({
	songs,
	addFavorite,
	removeFavorite,
	currUser,
	deleteSong,
}) => {
	const { songId } = useParams();
	const nav = useNavigate();
	const filteredSong = songs.find((song) => song.id === songId);
	const { uploadedBy } = filteredSong;

	if (!filteredSong) {
		return <p>Song not found!</p>;
	}

	function memeRickFct() {
		nav(`/songs/1`);

		setTimeout(() => {
			window.alert("You just got rickroll'd :D");
		}, 500);
	}

	function handleDelete() {
		deleteSong(filteredSong.id);
		nav(`/songs`);
	}

	return (
		<div className="for-all-divs">
			<div className="one-song-detail">
				<button
					className="memeBTN"
					onClick={() => {
						memeRickFct();
					}}
				>
					<img
						src={filteredSong.image}
						alt={filteredSong.title}
						data-tooltip-id="image-tooltip"
						data-tooltip-content={filteredSong.attribution}
					/>
				</button>
				<Tooltip
					id="image-tooltip"
					place="bottom"
					effect="float"
				/>
			</div>
			<div className="one-song-info">
				<h2 className="h2-one-song">
					{filteredSong.title}
					{'                     '}
					{currUser && (
						<div>
							{currUser.favorites.includes(filteredSong.id) ? (
								<button
									onClick={() => removeFavorite(filteredSong.id)}
									className="for-all-songs-btn"
								>
									<FontAwesomeIcon icon={solidHeart} />
								</button>
							) : (
								<button
									onClick={() => addFavorite(filteredSong.id)}
									className="for-all-songs-btn"
								>
									<FontAwesomeIcon icon={regularHeart} />
								</button>
							)}
						</div>
					)}
					{currUser && (
						<div>
							{currUser.id === uploadedBy.userId ? (
								<div>
									<Link to={`/edit-song/${filteredSong.id}`}>
										<button className="for-all-songs-btn">
											<FontAwesomeIcon icon={faPenToSquare} />
										</button>
									</Link>
									<button
										onClick={() => handleDelete()}
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
				</h2>
				<h4>
					By {filteredSong.artist}, <u>{filteredSong.album}</u>,{' '}
					{filteredSong.genre}, from the {filteredSong.decade}
				</h4>
			</div>
			<div className="trivia-box">
				<h4>Something cool</h4>
				<div className="trivia-box-inside">
					<div className="trivia-section">
						<p className="trivia-title">About the Artist:</p>
						<p className="trivia-content">{filteredSong.trivia.aboutArtist}</p>
					</div>
					<div className="vl"></div>
					<div className="trivia-section">
						<p className="trivia-title">About the Song:</p>
						<p className="trivia-content">{filteredSong.trivia.aboutSong}</p>
					</div>
				</div>
			</div>
			<br />
			<hr className="hr-random" />

			<h2>Sing it here!</h2>
			<div className="video-container">
				<iframe
					width="650"
					height="400"
					src={filteredSong.videoUrl}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<div>
				<Link to="/songs">
					<button className="random-btn">Back</button>
				</Link>
			</div>
		</div>
	);
};

export default OneSongDetailsPage;
