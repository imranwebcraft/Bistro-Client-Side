import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
// import ContactUS from '../Pages/ContactUS/ContactUS';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Secret from '../Components/Secret/Secret';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				index: true,
				element: <Home />,
			},

			{
				path: 'our-menu',
				element: <Menu />,
			},
			{
				path: 'order/:category',
				element: <Order />,
			},
			{
				path: 'secret',
				element: (
					<PrivateRoute>
						{' '}
						<Secret />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
]);

export default router;
