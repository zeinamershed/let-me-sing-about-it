import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';

function AddSongsPage({ addSong, currUser }) {
  const [song, setSong] = useState({
    title: '',
    artist: '',
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
      setSong({
        title: '',
        artist: '',
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
      navigate('/');
    } catch (error) {
      console.error('Error creating song:', error);
    }
  };

  return (
    <div className='for-all-divs'>
      <h1>Add a song you prefer</h1>
      <div className='add-song-form'>
      <form onSubmit={handleSubmit}>
        <label>
          Title: 
          <input type="text" name="title" value={song.title} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Artist:
          <input type="text" name="artist" value={song.artist} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Genre:
          <input type="text" name="genre" value={song.genre} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Decade:
          <input type="text" name="decade" value={song.decade} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" name="image" value={song.image} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image Attribution:
          <input type="text" name="attribution" value={song.attribution} onChange={handleChange} />
        </label>
        <br />
        <label>
          About Artist:
          <input type="text" name="aboutArtist" value={song.trivia.aboutArtist} onChange={handleTriviaChange} />
        </label>
        <br />
        <label>
          About Song:
          <input type="text" name="aboutSong" value={song.trivia.aboutSong} onChange={handleTriviaChange} />
        </label>
        <br />
        <label>
          Video URL:
          <input type="text" name="videoUrl" value={song.videoUrl} onChange={handleChange} />
        </label>
        <br />
        <br />
        <button type="submit">Add Song</button>
      </form>
      </div>
      <br />
      <Link to="/">Back to All Songs</Link>
    </div>
  );
}

export default AddSongsPage;