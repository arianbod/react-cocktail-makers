import React from 'react';
import { useRouteError } from 'react-router-dom';

const SInglePageError = () => {
	const error = useRouteError();
	console.log(error);
	return <h4>{error.message}</h4>;
};

export default SInglePageError;
