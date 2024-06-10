import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleInfo, faTrash, faPenToSquare} from "@fortawesome/free-solid-svg-icons"
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';


const AllSongsPage = ({ songs }) => {
	return (
		<div className="for-all-divs">
			{songs &&
				songs.map((oneSong) => (
					<div key={oneSong.id} className="all-songs-info-container">
						
						<div >
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
						<button className="for-all-songs-btn"><FontAwesomeIcon icon={faCircleInfo} /></button>
            </Link>
						<button className="for-all-songs-btn"><FontAwesomeIcon icon={regularHeart} /></button>
						<button className="for-all-songs-btn"><FontAwesomeIcon icon={faPenToSquare} /></button>
						<button className="for-all-songs-btn"><FontAwesomeIcon icon={faTrash} /></button>

					</div>
          
				))}
		</div>
	);
};

export default AllSongsPage;
