import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config.js';
import { Link } from 'react-router-dom';
import discoBall from '../assets/discoball.webp';
import Confetti from "react-confetti";

const RandomSongPage = () => {
	const [randomSong, setRandomSong] = useState(null);
	const [showConfetti, setShowConfetti] = useState(false);
	let randomIndex = 0;
	useEffect(() => {
		async function fetchRandomSong() {
			try {
				const { data } = await axios.get(`${API_URL}/songs`);
				getRandomIndex(data);
				setTimeout(() => {
					setRandomSong(data[randomIndex]);
					setShowConfetti(true);
                    setTimeout(() => {
                        setShowConfetti(false);
                    }, 5000);
				}, 2000);
				
			} catch (error) {
				console.log(error);
			}
		}
		fetchRandomSong();
	}, []);

	function getRandomIndex(array) {
		return (randomIndex = Math.floor(Math.random() * array.length));
	}

	return (
		<div className="random-song-div">
			{randomSong === null ? (
				<>
					<h1>You are going to sing...</h1>
					<img
						src={discoBall}
						alt="Jumpy disco ball"
					/>
				</>
			) : (
				<div>
					<h1>Congratulations!</h1>
					{showConfetti && <Confetti />}
					<h3>Your random song is...</h3>
					<h1>{randomSong.title}</h1>
					<hr className="hr-random" />
					<div className="random-song-info-container">
						<div>
							<img
								src={randomSong.image}
								alt={`Song of ${randomSong.title}`}
							/>
							{/* <h5>{randomSong.attribution}</h5> */}
						</div>
						<div className="random-song-info">
							<p>
								<strong>Artist:</strong> {randomSong.artist}
							</p>
							<p>
								<strong>Genre:</strong> {randomSong.genre}
							</p>
							<p>
								<strong>Decade:</strong> {randomSong.decade}
							</p>
							<br />
							<h4>Lyrics:</h4>
							<section>{randomSong.lyrics}</section>
						</div>
					</div>
					<hr className="hr-random" />

					<h2>Sing it here!</h2>
					<div className="video-container">
						<iframe
							width="650"
							height="400"
							src={randomSong.videoUrl}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>

					<Link to="/">
						<button className="random-btn">Back</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default RandomSongPage;
