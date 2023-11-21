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
import Payment from '../Pages/Dashboard/Payment Histrory/Payment';
import AddReview from '../Pages/Dashboard/AddReview/AddReview';
import MyBooking from '../Pages/Dashboard/MyBooking/MyBooking';
import AdminHome from '../Pages/Dashboard/Admin/AdminHome/AdminHome';
import AddItems from '../Pages/Dashboard/Admin/AddItems/AddItems';
import ManageItems from '../Pages/Dashboard/Admin/ManageItems/ManageItems';
import ManageBookings from '../Pages/Dashboard/Admin/ManageBookings/ManageBookings';
import AllUsers from '../Pages/Dashboard/Admin/AllUsers/AllUsers';
import AdminRoute from './AdminRoute';
import UpdateItem from '../Pages/Dashboard/Admin/UpdateItem/UpdateItem';
import MakePayment from '../Pages/Dashboard/Make Payment/MakePayment';

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
			//ADMIN only route
			{
				path: 'adminHome',
				element: (
					<AdminRoute>
						<AdminHome />
					</AdminRoute>
				),
			},
			{
				path: 'addItems',
				element: (
					<AdminRoute>
						<AddItems />
					</AdminRoute>
				),
			},
			{
				path: 'manageItems',
				element: (
					<AdminRoute>
						<ManageItems />
					</AdminRoute>
				),
			},
			{
				path: 'manageBookings',
				element: <ManageBookings />,
			},
			{
				path: 'allUsers',
				element: <AllUsers />,
			},
			{
				path: 'updateItem/:id',
				element: <UpdateItem />,
			},

			// USER only route
			{
				path: 'cart',
				element: (
					<PrivateRoute>
						<Cart />
					</PrivateRoute>
				),
			},
			{
				path: 'userHome',
				element: <UserHome />,
			},
			{
				path: 'reservation',
				element: <Reservation />,
			},
			{
				path: 'payment',
				element: <Payment />,
			},
			{
				path: 'review',
				element: <AddReview />,
			},
			{
				path: 'booking',
				element: <MyBooking />,
			},
			{
				path: 'makePayment',
				element: <MakePayment />,
			},
		],
	},
]);

export default router;
