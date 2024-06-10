import React from 'react';
import { Link, useParams } from 'react-router-dom';

const OneSongDetails = ({ songs }) => {
	const { songId } = useParams();
	const filteredSong = songs.find((song) => song.id === songId);

	if (!filteredSong) {
		return <p>Song not found!</p>;
	}

	return (
		<div className="for-all-divs">
			<div className='one-song-detail'>
				<img
					src={filteredSong.image}
					alt={filteredSong.song}
				/>
			</div>
			<h2>{filteredSong.song}</h2>
			<h4>
				{filteredSong.artist}, {filteredSong.genre}
			</h4>
			<p>{filteredSong.decade}</p>
			<h4>Lyrics:</h4>
			<p>{filteredSong.lyrics}</p>
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
				{/* <Link to={`/edit-song/${filteredSong.id}`}>
         <button className="edit-btn">Edit song</button>
        </Link> */}
			</div>
		</div>
	);
};

export default OneSongDetails;
