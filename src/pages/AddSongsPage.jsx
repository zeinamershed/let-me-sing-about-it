import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { API_URL } from '../config';

function AddSongsPage( {addSong} ) {
  
  const [song, setSong] = useState({ title: '', artist: '', genre: '', decade: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong((prevSong) => ({
      ...prevSong,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
    setSong({ title: '', artist: '', genre: '', decade: '' });
  };
 
  const { data } =  axios.post(`${API_URL}/songs`, newSong);
      console.log('Song created:', data);
      setCurrUser(data);
      navigate('/');
      

  return (
    <div>
      <h1>Add a song you prefer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={song.title} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Video Link:
          <input type="text" name="videoLink" value={song.videoLink} onChange={handleChange} />
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
        <button type="submit">Add Song</button>
      </form>
      <Link to="/">Back to All Songs</Link>
    </div>
    
  );
}

export default AddSongsPage;

