import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config.js";
import { Link } from 'react-router-dom';
import discoBall from "../assets/discoball.webp"

const RandomSongPage = () => {
  const [randomSong, setRandomSong] = useState(null); 
  let randomIndex = 0;
  useEffect(() => {
    async function fetchRandomSong() {
      try {        
        const { data } = await axios.get(`${API_URL}/songs`);
        getRandomIndex(data)
                  setTimeout(()=>{
          setRandomSong(data[randomIndex]);
        },2000)  
        
      
      } catch (error) {
        console.log(error);
      }
    }
    fetchRandomSong();
  }, []);

  function getRandomIndex(array){
    return randomIndex = Math.floor(Math.random() * array.length);
  }

  return (
    <div className="random-song-div">
      {randomSong === null ? ( 
        <><h1>Loading...</h1><img src={discoBall} alt="Jumpy disco ball" /></>
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