import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const loader = async () => {
	const searchTerm = ' ';
	const response = await axios.get(`${cocktailUrl}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};
const Landing = () => {
	const data = useLoaderData();
	console.log(data);
	return <div>Landing</div>;
};

export default Landing;
