import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const loader = async () => {
	const searchTerm = '';
	const response = await axios.get(`${cocktailUrl}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};
const Landing = () => {
	const { drinks } = useLoaderData();
	return (
		<>
			<CocktailList drinks={drinks} />
		</>
	);
};

export default Landing;
