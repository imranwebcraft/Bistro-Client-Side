import { NavLink, Outlet } from 'react-router-dom';
import {
	FaBagShopping,
	FaBars,
	FaCalendar,
	FaCalendarPlus,
	FaCartShopping,
	FaHouse,
	FaHouseChimney,
	FaPaypal,
	FaPhoneVolume,
	FaStar,
	FaUsers,
	FaUtensils,
} from 'react-icons/fa6';
import { BsMenuButton } from 'react-icons/bs';
import { TbBrandBooking } from 'react-icons/tb';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
	const [cart] = useCart();

	// TODO: Get isAdmin value from the database
	const isAdmin = true;

	return (
		<div className=" flex gap-10">
			{/* Sidebar */}
			<div className="h-screen p-3 w-80 space-y-2  bg-orange-500 text-gray-100 dark:bg-gray-900 dark:text-gray-100">
				{/* Heading */}
				<div className="flex items-center p-2 space-x-4">
					<div className=" text-center w-full">
						<h2 className="text-4xl font-semibold">Bistro Boss</h2>
						<h2 className="text-3xl">Restuarant</h2>
					</div>
				</div>
				<div className="divide-y divide-gray-700">
					{/* Conditional Navlinks. User and admin can see different layout */}
					<p className="text-sm text-center">
						Conditional Navlinks.User & Admin will see different layout
					</p>

					{/* Conditional Navbar for admin and user view */}
					{isAdmin ? (
						<>
							<ul className="pt-2 pb-4 text-sm">
								<li className="dark:bg-gray-800 dark:text-gray-50">
									<NavLink
										to="/dashboard/adminHome"
										className={({ isActive }) =>
											isActive ? 'text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<FaHouse className=" text-lg"></FaHouse> Admin Home
										</span>
									</NavLink>
									<NavLink
										to="/dashboard/addItems"
										className={({ isActive }) =>
											isActive ? 'text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<FaUtensils className=" text-lg"></FaUtensils> Add Items
										</span>
									</NavLink>
									<NavLink
										to="/dashboard/manageItems"
										className={({ isActive }) =>
											isActive ? 'text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<BsMenuButton className=" text-lg"></BsMenuButton>
											Manage Items
										</span>
									</NavLink>
									<NavLink
										to="/dashboard/manageBookings"
										className={({ isActive }) =>
											isActive ? ' text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<TbBrandBooking className=" text-lg"></TbBrandBooking>
											Manage Booking
											{/* TODO: Add all bookign data here */}
											<span className=" text-sky-500"> </span>
										</span>
									</NavLink>
									<NavLink
										to="/dashboard/allUsers"
										className={({ isActive }) =>
											isActive ? ' text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<FaUsers className=" text-lg"></FaUsers> All Users
										</span>
									</NavLink>
								</li>
							</ul>
						</>
					) : (
						<>
							<ul className="pt-2 pb-4 text-sm">
								<li className="dark:bg-gray-800 dark:text-gray-50">
									<NavLink
										to="/dashboard/userHome"
										className={({ isActive }) =>
											isActive ? 'text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<FaHouse className=" text-lg"></FaHouse> User Home
										</span>
									</NavLink>
									<NavLink
										to="/dashboard/reservation"
										className={({ isActive }) =>
											isActive ? 'text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<FaCalendar className=" text-lg"></FaCalendar> Reservation
										</span>
									</NavLink>
									<NavLink
										to="/dashboard/payment"
										className={({ isActive }) =>
											isActive ? 'text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<FaPaypal className=" text-lg"></FaPaypal>
											Payment History
										</span>
									</NavLink>
									<NavLink
										to="/dashboard/cart"
										className={({ isActive }) =>
											isActive ? ' text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<FaCartShopping className=" text-lg"></FaCartShopping> My
											Cart
											<span className=" text-sky-500">
												(Items: {cart?.length})
											</span>
										</span>
									</NavLink>
									<NavLink
										to="/dashboard/review"
										className={({ isActive }) =>
											isActive ? ' text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<FaStar className=" text-lg"></FaStar> Add Review
										</span>
									</NavLink>
									<NavLink
										to="/dashboard/booking"
										className={({ isActive }) =>
											isActive ? ' text-green-500 font-semibold' : ''
										}
									>
										<span className=" flex items-center gap-2 bg-gray-800 px-2 py-2 rounded-md mt-2">
											<FaCalendarPlus className=" text-lg"></FaCalendarPlus> My
											Booking
										</span>
									</NavLink>
								</li>
							</ul>
						</>
					)}

					{/* Shared navlinks  */}
					<p className="text-sm text-center">
						Shared navlinks.Both User and Admin can access
					</p>

					<ul className="pt-4 pb-2 space-y-1 text-sm">
						<li>
							<NavLink to="/">
								<span className=" flex items-center gap-2 px-2 py-2 rounded-md mt-2">
									<FaHouseChimney className=" text-lg"></FaHouseChimney> Home
								</span>
							</NavLink>
							<NavLink to="/our-menu">
								<span className=" flex items-center gap-2 px-2 py-2 rounded-md mt-2">
									<FaBars className=" text-lg"></FaBars> Menu
								</span>
							</NavLink>
							<NavLink to="/order/salad">
								<span className=" flex items-center gap-2 px-2 py-2 rounded-md mt-2">
									<FaBagShopping className=" text-lg"></FaBagShopping> Shop
								</span>
							</NavLink>
							<NavLink to="/order/salad">
								<span className=" flex items-center gap-2 px-2 py-2 rounded-md mt-2">
									<FaPhoneVolume className=" text-lg"></FaPhoneVolume> Contact
								</span>
							</NavLink>
						</li>
						<li>
							<a
								rel="noopener noreferrer"
								href="#"
								className="flex items-center p-2 space-x-3 rounded-md"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="w-5 h-5 fill-current dark:text-gray-400"
								>
									<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
									<rect width="32" height="64" x="256" y="232"></rect>
								</svg>
								<span>Logout</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/* Content */}
			<div className=" flex-1 py-16">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
