import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	About,
	Cocktail,
	Error,
	HomeLayout,
	Landing,
	Newsletter,
} from './pages/';
const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Landing />,
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
				path: '/Error',
				element: <Error />,
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
