import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	About,
	Cocktail,
	Error,
	HomeLayout,
	Landing,
	SinglePageError,
	Newsletter,
} from './pages/';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';
const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: landingLoader,
			},
			{
				path: '/Cocktail/:id',
				errorElement: <SinglePageError />,
				loader: singleCocktailLoader,
				element: <Cocktail />,
			},
			{
				path: '/about',
				element: <About />,
			},

			{
				path: '/Newsletter',
				action: newsletterAction,
				element: <Newsletter />,
			},
		],
	},
]);
const App = () => {
	return <RouterProvider router={router}>mixmaster starter</RouterProvider>;
};
export default App;
