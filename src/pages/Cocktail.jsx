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
	console.log(data);
	if (!data || data.drinks === null)
		return (
			<>
				<h2>something went wrong ...</h2>
				<Link
					to='/'
					className='btn'>
					back Home
				</Link>
			</>
		);

	const singleDrink = data.drinks[0];
	const {
		strDrink: name,
		strDrinkThumb: image,
		strAlcoholic: info,
		strGlass: glass,
		strInstructions: instructions,
		strCategory: category,
	} = singleDrink;

	let ingredients = [];
	let i = 1;
	while (true) {
		const ingredient = singleDrink[`strIngredient${i}`];
		if (ingredient) {
			ingredients.push(ingredient);
			i++;
		} else {
			break;
		}
	}
	console.log(ingredients);
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
				<div className='drink-info'>
					<p>
						<span className='drink-data'>name:</span>
						{name}
					</p>
					<p>
						<span className='drink-data'>category:</span>
						{category}
					</p>
					<p>
						<span className='drink-data'>info:</span>
						{info}
					</p>
					<p>
						<span className='drink-data'>glass:</span>
						{glass}
					</p>
					<p>
						<span className='drink-data'>instructions:</span>
						{instructions}
					</p>
					<p>
						<span className='drink-data'>ingredient:</span>
						{ingredients.map((item, index) => {
							return (
								<span key={index}>
									{item} {index < ingredients.length - 1 ? ',' : ''}
								</span>
							);
						})}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default React.memo(Cocktail);
