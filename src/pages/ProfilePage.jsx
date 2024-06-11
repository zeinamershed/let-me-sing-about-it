import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = ({ currUser, songs }) => {
	if (!currUser) {
		return <p>User not found</p>;
	}

	const joinedDate = new Date(currUser.joinedIn);

	// Filtrar as músicas favoritas do usuário
	const favoriteSongs = songs.filter(song => currUser.favorites.includes(song.id));

	return (
		<div className="for-all-divs">
			<div className="user-profile-page">
				<div className="user-profile-1">
					<h1>Hello, {currUser.username}!</h1>
					<hr className="hr-random" />
					<div className="user-info">
						<p>With us since: {joinedDate.toLocaleDateString()}</p>
						<p>Name: {currUser.fullname}</p>
						<br />
						<h2>Your favorite songs:</h2>
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
				</div>
				<div className="user-profile-1">
					<img
						src={currUser.profileImage}
						alt={currUser.username}
					/>
					<br />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;