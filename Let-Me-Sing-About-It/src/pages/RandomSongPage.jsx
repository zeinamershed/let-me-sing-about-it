import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config.js";
import { Link } from 'react-router-dom';

const RandomSongPage = () => {
  const [randomSong, setRandomSong] = useState(null); 
  useEffect(() => {
    async function fetchRandomSong() {
      try {
        setRandomSong(null)
        const { data } = await axios.get(`${API_URL}/songs`);
        const randomIndex = Math.floor(Math.random() * data.length);        
          setRandomSong(data[randomIndex]);
      
      } catch (error) {
        console.log(error);
      }
    }
    fetchRandomSong();
  }, []);

  return (
    <div className="random-song-div">
      {randomSong === null ? ( 
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Congratulations!</h1>
          <h3>You are going to sing...</h3>
          <img src={randomSong.image} alt={`Song of ${randomSong.song}`} />
          <h2>{randomSong.song}</h2>
          <div>
            <p>Artist: {randomSong.artist}</p>
            <p>Genre: {randomSong.genre}</p>
            <p>Decade: {randomSong.decade}</p>
            <br />
            <h4>Lyrics:</h4>
            <section>{randomSong.lyrics}</section>
          </div>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RandomSongPage;