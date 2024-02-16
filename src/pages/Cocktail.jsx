import axios from 'axios';
import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';
export const loader = async ({ params }) => {
	const { id } = params;
	const singleCocktailUrl =
		'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

	{
	}
	const { data } = await axios.get(`${singleCocktailUrl}${id}`);
	console.log(id, data);
	return { id, data };
};
const Cocktail = () => {
	const { id, data } = useLoaderData();
	const singleDrink = data.drinks[0];
	const {
		strDrink: name,
		strDrinkThumb: image,
		strAlcoholic: info,
		strGlass: glass,
		strInstruction: instructions,
	} = singleDrink;
	console.log(singleDrink);
	return (
		<Wrapper>
			<header>
				<Link
					to='/'
					className='btn'>
					back Home
				</Link>
				<h3>{name}</h3>
			</header>
			<div className='drink'>
				<img
					src={image}
					alt={name}
					className='img'
				/>
				<p>{info}</p>
				<p>{glass}</p>
			</div>
		</Wrapper>
	);
};

export default Cocktail;
