import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';

function EditSongPage({ songs, updateSong }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const songToEdit = songs.find(song => song.id === parseInt(id));
    const [song, setSong] = useState(songToEdit || { title: songToEdit.title, artist: songToEdit.artist, genre: songToEdit.genre, image: songToEdit.image, decade: songToEdit.decade, videoLink: songToEdit.videoURL });
  

      const handleChange = (e) => {
        const { name, value } = e.target;
        setSong((prevSong) => ({
          ...prevSong,
          [name]: value,
        }));
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        updateSong(song);
        navigate('/');
      };

      
  return (
    <div className='for-all-divs'>
        <h1>Edit Song</h1>
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
          Image:
          <input type="text" name="image" value={song.image} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Decade:
          <input type="text" name="decade" value={song.decade} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Video Link:
          <input type="text" name="videoLink" value={song.videoLink} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Save Changes</button> 
     </form>
     </div>
    </div>
  )
}

export default EditSongPage

