import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AllSongsPage = () => {
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/songs`);
        console.log("here is the return from the post", data);
        setSongs(data);
      } catch (error) {
        console.log("there was an error with the post", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="all-songs-div">
      {songs && (
        songs.map((oneSong) => (
          <div key={oneSong.id}> 
            <hr className="hr-all-songs" />
            <div className="all-songs-info-container">
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
              <button className="song-details-btn">Details</button>
              <button className="favorites-btn">Add to Favorites</button>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default AllSongsPage;


