import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function AddSongsPage() {
  
  const [song, setSong] = useState({ title: '', artist: '', link: '' });
  const [songs, setSongs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSong({ ...song, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (song.title && song.artist && song.link) {
      if (editIndex !== null) {
     
        const updatedSongs = songs.map((s, index) =>
          index === editIndex ? song : s
        );
        setSongs(updatedSongs);
        setEditIndex(null); 
      } else {
        
        setSongs([...songs, song]);
      }
      setSong({ title: '', artist: '', link: '' }); 
    }
  };

  const handleEdit = (index) => {
    setSong(songs[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedSongs = songs.filter((s, i) => i !== index);
    setSongs(updatedSongs);
  };

  return (
    <div>
      <h1>Add a song which you prefer</h1>
      <form onSubmit={handleSubmit} className='add-form'>
        <div>
          <label>
             Title:
            <input className='add-input'
              type="text"
              name="title"
              value={song.title}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Artist:
            <input className='add-input'
              type="text"
              name="artist"
              value={song.artist}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Link:
            <input className='add-input'
              type="text"
              name="link"
              value={song.link}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button className='button-form' type="submit">{editIndex !== null ? 'Update Song' : 'Add Song'}</button>
      </form>
      
      <h2>Song List</h2>
      <div className='add-list'>
      <ul>
        {songs.map((s, index) => (
          <li key={index}>
            {s.title} by {s.artist}{' '}
            <a href={s.link} target="_blank" rel="noopener noreferrer">Listen</a>{' '}
            <button className='button-form' onClick={() => handleEdit(index)}>Edit</button>
            <button className='button-form' onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default AddSongsPage;

