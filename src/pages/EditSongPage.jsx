import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditSongPage({ songs, updateSong }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const songToEdit = songs.find((song) => song.id === id);

	const [song, setSong] = useState({
		id: songToEdit.id,
		title: songToEdit.title,
		artist: songToEdit.artist,
		genre: songToEdit.genre,
		image: songToEdit.image,
		decade: songToEdit.decade,
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
						Image:
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
						Decade:
						<input
							type="text"
							name="decade"
							value={song.decade}
							onChange={handleChange}
							required
						/>
					</label>
					<br />
					<label>
						Video Link:
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
