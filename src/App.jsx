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
				element: <Cocktail />,
			},
			{
				path: '/about',
				element: <About />,
			},

			{
				path: '/Newsletter',
				element: <Newsletter />,
			},
		],
	},
]);
const App = () => {
	return <RouterProvider router={router}>mixmaster starter</RouterProvider>;
};
export default App;
