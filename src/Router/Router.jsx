import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
// import ContactUS from '../Pages/ContactUS/ContactUS';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order';

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
				path: 'order',
				element: <Order />,
			},
		],
	},
]);

export default router;
