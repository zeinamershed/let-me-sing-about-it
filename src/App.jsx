import './App.css';
import HomePage from './pages/HomePage';
import DecadesPage from './pages/DecadesPage';
import RandomSongPage from './pages/RandomSongPage';
import FavoriteSongsPage from './pages/FavoriteSongsPage';
import { Routes, Route } from 'react-router-dom';
import About from '../src/pages/AboutPage';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './config';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddSongsPage from './pages/AddSongsPage';
import AllSongsPage from './pages/AllSongsPage';
import OneSongDetailsPage from './pages/OneSongDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import ProfilePage from './pages/ProfilePage';
import ScrollToTop from './components/ScrollToTop';
import OneDecadeFilteredPage from './pages/OneDecadeFilteredPage';
import EditSongPage from './pages/EditSongPage';

function App() {
	const [songs, setSongs] = useState([]);
	const [currUser, setCurrUser] = useState();

	/* Get songs FCT */
	useEffect(() => {
		const fetchSongs = async () => {
			try {
				const { data } = await axios.get(`${API_URL}/songs`);
				console.log('here is the return from the post', data);
				setSongs(data);
			} catch (error) {
				console.log('there was an error with the post', error);
			}
		};

		fetchSongs();
	}, []);
	/* Handle favs FCT */
	const addFavorite = async (songId) => {
		if (!currUser) return;

		try {
			const updatedFavorites = [...currUser.favorites, songId];
			const updatedUser = { ...currUser, favorites: updatedFavorites };

			await axios.patch(`${API_URL}/users/${currUser.id}`, {
				favorites: updatedFavorites,
			});
			setCurrUser(updatedUser);
		} catch (error) {
			console.error('Error adding favorite:', error);
		}
	};

	const removeFavorite = async (songId) => {
		if (!currUser) return;

		try {
			const updatedFavorites = currUser.favorites.filter((id) => id !== songId);
			const updatedUser = { ...currUser, favorites: updatedFavorites };

			await axios.patch(`${API_URL}/users/${currUser.id}`, {
				favorites: updatedFavorites,
			});
			setCurrUser(updatedUser);
		} catch (error) {
			console.error('Error removing favorite:', error);
		}
	};
	/* ADD SONG FCT */
	const addSong = (newSong) => {
		setSongs((prevSongs) => [...prevSongs, newSong]);
	};
	/* Update SONG FCT */
	const updateSong = async (updatedSong) => {
		try {
			const { data } = await axios.patch(
				`${API_URL}/songs/${updatedSong.id}`,
				updatedSong
			);
			setSongs((prevSongs) =>
				prevSongs.map((song) => (song.id === data.id ? data : song))
			);
		} catch (error) {
			console.error('Error updating song:', error);
		}
	};
	/* Delete SONG FCT */
	async function deleteSong(songId) {
		try {
			await axios.delete(`${API_URL}/songs/${songId}`);
			setSongs((prevSongs) => prevSongs.filter((song) => song.id !== songId));
			console.log('Song deleted successfully');
		} catch (error) {
			console.error('Error deleting song:', error);
		}
	}

	return (
		<>
			<Navbar
				currUser={currUser}
				setCurrUser={setCurrUser}
			/>
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={<HomePage currUser={currUser} />}
				/>
				<Route
					path="/songs"
					element={
						<AllSongsPage
							songs={songs}
							addFavorite={addFavorite}
							removeFavorite={removeFavorite}
							currUser={currUser}
							deleteSong={deleteSong}
							updateSong={updateSong}
						/>
					}
				/>
				<Route
					path="/decades"
					element={<DecadesPage />}
				/>
				<Route
					path="decades/:decadeId"
					element={<OneDecadeFilteredPage songs={songs} />}
				/>
				<Route
					path="/random"
					element={<RandomSongPage />}
				/>
				<Route
					path="/favorites"
					element={
						<FavoriteSongsPage
							currUser={currUser}
							songs={songs}
						/>
					}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/add"
					element={
						<AddSongsPage
							addSong={addSong}
							currUser={currUser}
						/>
					}
				/>
				<Route
					path="/About"
					element={<About />}
				/>
				<Route
					path="/songs/:songId"
					element={
						<OneSongDetailsPage
							songs={songs}
							addFavorite={addFavorite}
							removeFavorite={removeFavorite}
							currUser={currUser}
							deleteSong={deleteSong}
						/>
					}
				/>
				<Route
					path="*"
					element={<NotFoundPage />}
				/>
				<Route
					path="/signup"
					element={<SignUpForm setCurrUser={setCurrUser} />}
				/>
				<Route
					path="/login"
					element={<LogInForm setCurrUser={setCurrUser} />}
				/>
				<Route
					path="/profile"
					element={
						<ProfilePage
							currUser={currUser}
							setCurrUser={setCurrUser}
							songs={songs}
							deleteSong={deleteSong}
						/>
					}
				/>
				<Route
					path="/edit-song/:id"
					element={
						<EditSongPage
							songs={songs}
							updateSong={updateSong}
							currUser={currUser}
						/>
					}
				/>
			</Routes>

			<br />
			<Footer />
		</>
	);
}

export default App;
