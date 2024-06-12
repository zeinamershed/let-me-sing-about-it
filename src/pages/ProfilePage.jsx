import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = ({ currUser, songs }) => {
	if (!currUser) {
		return <p>User not found</p>;
	}

	const joinedDate = new Date(currUser.joinedIn);

	// Filtrar as músicas favoritas do usuário
	const favoriteSongs = songs.filter(song => currUser.favorites.includes(song.id));
	let createdSongs = songs.filter(song => song.uploadedBy.userId.includes(currUser.id));
	return (
		<div className="for-all-divs">
			<div className="user-profile-page">
				<div className="user-profile-1">
					<h1>Hello, {currUser.username}!</h1>
					<hr className="hr-random" />
					<div className="user-info">
						
						<h2>Your favorite songs:</h2>
						<div className='div-for-scroll'>
						{favoriteSongs.length > 0 ? (
							favoriteSongs.map(song => (
                <Link to={`/songs/${song.id}`}>
								<div key={song.id} className="favorite-song-user" >
									<span><strong>Title:</strong> {song.title}</span>
									<p><strong>Artist:</strong> {song.artist}</p>
								</div></Link>
							))
						) : (
							<p>You have no favorite songs yet.</p>
						)}
						</div>

						<h2>The songs you added:</h2>
						<div className='div-for-scroll'>
						{createdSongs.length > 0 ? (
							createdSongs.map(song => (
                <Link to={`/songs/${song.id}`}>
								<div key={song.id} className="favorite-song-user" >
									<span><strong>Title:</strong> {song.title}</span>
									<p><strong>Artist:</strong> {song.artist}</p>
								</div></Link>
							))
						) : (
							<p>You added no songs yet.</p>
						)}
						</div>

					</div>
				</div>
				<div className="user-profile-box">
					<img
						src={currUser.profileImage}
						alt={currUser.username}
					/>
					<br />
					<hr className="hr-random" />
					<section className='user-info-small'>
					<p><strong>Member since:</strong> {joinedDate.toLocaleDateString()}</p>
						<p><strong>Name: </strong>{currUser.fullname}</p>
						<br /></section>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;