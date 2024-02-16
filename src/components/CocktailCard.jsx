import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';
const CocktailCard = ({ id, image, info, glass, name }) => {
	return (
		<Wrapper>
			<div className='img-container'>
				<img
					src={image}
					alt={name}
					className='img'
				/>
			</div>
		</Wrapper>
	);
};

export default CocktailCard;
