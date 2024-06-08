import React from 'react';
import { Link } from 'react-router-dom';

const DecadesPage = () => {
	return (
		<div className="for-all-divs">
			<h1>Choose your vibe:</h1>
			<div className="decades-bts">
				<button className="btn-80">
					<h2>'80s</h2>
					<p>The Decade of Excess</p>
				</button>
				<button className="btn-90">
					<h2>'90s</h2>
					<p>The Decade of Grunge</p>
				</button>
				<button className="btn-00">
					<h2>2000s</h2>
					<p>The Noughties</p>
				</button>
				<button className="btn-10">
					<h2>2010s</h2>
					<p>The Tens</p>
				</button>
				<button className="btn-20">
					<h2>'20s Again!</h2>
					<p>The Roaring Twenties Reimagined</p>
				</button>
			</div>

			<Link to="/">
				<button className="random-btn">Back</button>
			</Link>
		</div>
	);
};

export default DecadesPage;
