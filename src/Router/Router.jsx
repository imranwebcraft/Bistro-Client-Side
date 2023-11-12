import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
// import ContactUS from '../Pages/ContactUS/ContactUS';
import Menu from '../Pages/Menu/Menu';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			// {
			// 	path: 'contact-us',
			// 	element: <ContactUS />,
			// },
			{
				path: 'our-menu',
				element: <Menu />,
			},
		],
	},
]);

export default router;
