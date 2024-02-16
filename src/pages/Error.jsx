import React from 'react';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';
const Error = () => {
	const error = useRouteError();
	console.log();
	return (
		<Wrapper>
			{error.status === 404 ? (
				<div>
					<img
						src={img}
						alt={error.data}
					/>
					<h2>Ohhh!</h2>
					<p>We can't seem to find page you are looking for</p>
					<Link to='/'>Back Home</Link>
				</div>
			) : (
				<>
					<h1>{error.status}</h1>
					<h6>{error.data}</h6>
				</>
			)}
		</Wrapper>
	);
};

export default Error;
