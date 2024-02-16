import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	About,
	Cocktail,
	Error,
	HomeLayout,
	Landing,
	SInglePageError,
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
				errorElement: <SInglePageError />,
				loader: landingLoader,
			},
			{
				path: '/Cocktail',
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
