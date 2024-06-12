import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';

function AddSongsPage({ addSong, currUser }) {
	const [song, setSong] = useState({
		title: '',
		artist: '',
    album: '',
		genre: '',
		decade: '',
		image: '',
		attribution: '',
		trivia: {
			aboutArtist: '',
			aboutSong: '',
		},
		videoUrl: '',
	});
	const navigate = useNavigate();

  if (!currUser) {
		return (
			<div className="for-all-divs">
				<p>You need to be logged in to access this feature</p>
			</div>
		);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSong((prevSong) => ({
			...prevSong,
			[name]: value,
		}));
	};

	const handleTriviaChange = (e) => {
		const { name, value } = e.target;
		setSong((prevSong) => ({
			...prevSong,
			trivia: {
				...prevSong.trivia,
				[name]: value,
			},
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const songWithUser = {
			...song,
			uploadedBy: {
				userId: currUser.id,
				username: currUser.username,
				profileImage: currUser.profileImage,
			},
		};

		try {
			const { data } = await axios.post(`${API_URL}/songs`, songWithUser);
			console.log('Song created:', data);
			addSong(data);
			setSong(data);
			navigate(`/songs`);
		} catch (error) {
			console.error('Error creating song:', error);
		}
	};

	return (
<div className="add-song-page for-all-divs">
  <h1>Add A New Song</h1>
  <div className="add-song-form">
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={song.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Artist:
        <input
          type="text"
          name="artist"
          value={song.artist}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Album:
        <input
          type="text"
          name="album"
          value={song.album}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Genre:
        <input
          type="text"
          name="genre"
          value={song.genre}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Decade:
        <select
          name="decade"
          value={song.decade}
          onChange={handleChange}
          required
        >
          <option value="80's">80's</option>
          <option value="90's">90's</option>
          <option value="00's">00's</option>
          <option value="10's">10's</option>
          <option value="20's">20's</option>
        </select>
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={song.image}
          onChange={handleChange}
        />
      </label>
      <label>
        Image Attribution:
        <input
          type="text"
          name="attribution"
          value={song.attribution}
          onChange={handleChange}
        />
      </label>
      <label>
        About Artist:
        <textarea
          name="aboutArtist"
          value={song.trivia.aboutArtist}
          onChange={handleTriviaChange}
        />
      </label>
      <label>
        About Song:
        <textarea
          name="aboutSong"
          value={song.trivia.aboutSong}
          onChange={handleTriviaChange}
        />
      </label>
      <label>
        Video URL:
        <input
          type="text"
          name="videoUrl"
          value={song.videoUrl}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Song</button>
    </form>
  </div>
  <Link to="/">Back to All Songs</Link>
</div>
	);
}

export default AddSongsPage;
