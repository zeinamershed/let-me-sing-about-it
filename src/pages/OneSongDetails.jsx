import React from 'react'
import { Link, useParams } from "react-router-dom";

const OneSongDetails = () => {
    const { songID } = useParams();
    const filteredSongs = songs.find((song) => { // try with useEffect so no need of passing props
      if (song.id == songID) {
        return true;
      }
    });
  
    return (
      <div className="for-all-divs">
        <div>
        <img src={filteredSongs.image} alt={filteredSongs.song} />
        </div>
        <h2>{filteredSongs.song}</h2>
        <h4>{filteredSongs.artist}, {filteredSongs.genre}</h4>
        
        <p>{filteredSongs.decade}</p>
        <h4>Lyrics:</h4>
        <p>{filteredSongs.lyrics}</p>
        <br/>
        <hr className='hr-random'/>

					<h2>Sing it here!</h2>
					<div className="video-container">
						<iframe
							width="750"
							height="425"
							src={filteredSongs.videoUrl}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
            <   div>
					<Link to="/">
						<button className='random-btn'>Back</button>
					</Link>
                    {/* <Link to={`/edit-rental/${filteredSongs.id}`}>
                     <button className="edit-btn">Edit song</button>
                    </Link> */}
                </div>  
      </div>
    );
  };

export default OneSongDetails