import './App.css';
import HomePage from './pages/HomePage';
import DecadesPage from './pages/DecadesPage';
import RandomSongPage from './pages/RandomSongPage';
import FavoriteSongsPage from './pages/FavoriteSongsPage';
import { Routes, Route } from "react-router-dom";
import About from '../src/pages/AboutPage'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import AddSongsPage from './pages/AddSongsPage';

function App() {

	return (
		<>
    <Navbar />
			<Routes>
        <Route path='/' element={<HomePage />}/>
				<Route path='/decades' element={<DecadesPage/>}/>
        <Route path='/random' element={<RandomSongPage/>}/>
        <Route path='/favorites' element={<FavoriteSongsPage/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/add' element={<AddSongsPage />} />
			</Routes>
      
      <br />
      <Footer />
		</>
	);
 
}

export default App;
