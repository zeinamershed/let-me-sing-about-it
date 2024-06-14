import React from 'react';
import { Link, useParams } from 'react-router-dom';

const OneDecadeFilteredPage = ({ songs }) => {
	const { decadeId } = useParams();
	const filteredDecade = songs.filter((song) => song.decade === decadeId);

	return (
		<div className="for-all-divs">
			<h1>Best of the {decadeId}</h1>
			<br />
			<hr />
			{filteredDecade &&
				filteredDecade.map((song) => (
					<div
						key={song.id}
						className="all-songs-info-container"
					>
						<Link
							to={`/songs/${song.id}`}
							className="links-songs"
						>
							<div>
								<div className="all-songs-song-info">
									<h2>{song.title}</h2>
									<p>
										<strong>Artist:</strong> {song.artist}
									</p>
									<p>
										<strong>Genre:</strong> {song.genre}
									</p>
									<p>
										<strong>Decade:</strong> {song.decade}
									</p>
								</div>
							</div>
						</Link>
					</div>
				))}
		</div>
	);
};

export default OneDecadeFilteredPage;
