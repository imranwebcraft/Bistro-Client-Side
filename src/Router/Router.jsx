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
import Dashboard from '../Layout/Dashboard';
import Cart from '../Pages/Dashboard/Cart/Cart';
import UserHome from '../Pages/Dashboard/UserHome/UserHome';
import Reservation from '../Pages/Dashboard/Reservation/Reservation';
import Payment from '../Pages/Dashboard/Payment/Payment';
import AddReview from '../Pages/Dashboard/AddReview/AddReview';
import MyBooking from '../Pages/Dashboard/MyBooking/MyBooking';

const router = createBrowserRouter([
	// Main Layout
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
	// Login
	{
		path: '/login',
		element: <Login />,
	},
	// Sing Up
	{
		path: '/signup',
		element: <SignUp />,
	},
	// Admin /Dashboard Layout
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				path: 'cart',
				element: (
					<PrivateRoute>
						<Cart />
					</PrivateRoute>
				),
			},
			{
				path: '/dashboard/userHome',
				element: <UserHome />,
			},
			{
				path: '/dashboard/reservation',
				element: <Reservation />,
			},
			{
				path: '/dashboard/payment',
				element: <Payment />,
			},
			{
				path: '/dashboard/review',
				element: <AddReview />,
			},
			{
				path: '/dashboard/booking',
				element: <MyBooking />,
			},
		],
	},
]);

export default router;
