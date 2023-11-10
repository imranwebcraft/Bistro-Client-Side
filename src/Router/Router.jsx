import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import ContactUS from '../Pages/ContactUS/ContactUS';

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
				path: 'contact-us',
				element: <ContactUS />,
			},
		],
	},
]);

export default router;
