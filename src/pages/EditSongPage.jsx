import React, { useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditSongPage({ songs, updateSong, currUser}) {
	const { id } = useParams();
	const navigate = useNavigate();
	const songToEdit = songs.find((song) => song.id === id);

  if (!currUser) {
		return (
			<div className="for-all-divs">
				<p>You need to be logged in to access this feature</p>
			</div>
		);
	}

	const [song, setSong] = useState({
		id: songToEdit.id,
		title: songToEdit.title,
		artist: songToEdit.artist,
        album: songToEdit.album,
		genre: songToEdit.genre,
        decade: songToEdit.decade,
		image: songToEdit.image,
		attribution: songToEdit.attribution,
        trivia: {aboutArtist: songToEdit.aboutArtist,
                aboutSong: songToEdit.aboutSong
                },
		videoUrl: songToEdit.videoUrl,
        

	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSong((prevSong) => ({
			...prevSong,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateSong({ ...song, id: id });
		navigate(`/songs/${id}`);
	};

	const handleCancel = () => {
		navigate(`/songs/${id}`);
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

	return (
		<div className="for-all-divs">
			<h1>Edit Song</h1>
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
					<br />
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
					<br />
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
                    <br />
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
					<br />
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
                        <br />
					<label>
						Image URL:
						<input
							type="text"
							name="image"
							value={song.image}
							onChange={handleChange}
							required
						/>
					</label>
					<br />
                        <label>
                        Image Attribution:
                        <input
                        type="text"
                        name="attribution"
                        value={song.attribution}
                        onChange={handleChange}
                        />
                    </label>
                    <br />
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
                    <br />
					<label>
						Video URL:
						<input
							type="text"
							name="videoURL"
							value={song.videoUrl}
							onChange={handleChange}
						/>
					</label>
					<br />
					<button type="submit">Save Changes</button>
					<button
						type="button"
						onClick={handleCancel}
					>
						Cancel
					</button>
				</form>
			</div>
		</div>
	);
}

export default EditSongPage;
