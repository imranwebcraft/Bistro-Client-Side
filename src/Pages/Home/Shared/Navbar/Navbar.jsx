import { NavLink } from 'react-router-dom';
import navBarImg from '../../../../assets/icon/navbarIcon.png';
import useAuth from '../../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { FaCartShopping } from 'react-icons/fa6';
import useCart from '../../../../Hooks/useCart';

const Navbar = () => {
	// Hook
	const [cart] = useCart();

	// Auth context
	const { user, logOut } = useAuth();
	// Log out event hadler
	const handleLogOut = () => {
		logOut()
			.then(() => {
				toast.success('Log Out successfull!');
			})
			.catch(error => {
				toast.error(error.message);
			});
	};

	const navlinks = (
		<ul className="menu menu-horizontal px-1 space-x-5">
			<li className=" uppercase">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? ' bg-green-500 font-semibold text-white' : 'font-medium'
					}
				>
					Home
				</NavLink>
			</li>

			<li className=" uppercase ">
				<NavLink
					to="/our-menu"
					className={({ isActive }) =>
						isActive ? ' bg-green-500 font-semibold text-white' : ' font-medium'
					}
				>
					Our Menu
				</NavLink>
			</li>
			<li className=" uppercase ">
				<NavLink
					to="/order/salad"
					className={({ isActive }) =>
						isActive ? ' bg-green-500 font-semibold text-white' : ' font-medium'
					}
				>
					Order Food
				</NavLink>
			</li>
			<li className=" uppercase ">
				<NavLink
					to="/secret"
					className={({ isActive }) =>
						isActive ? ' bg-green-500 font-semibold text-white' : ' font-medium'
					}
				>
					Secret
				</NavLink>
			</li>
			<li className=" uppercase">
				<NavLink
					to="/dashboard/cart"
					className={({ isActive }) =>
						isActive ? 'font-semibold text-white' : ' font-medium'
					}
				>
					<button className="btn btn-sm">
						<FaCartShopping></FaCartShopping>
						<div className="badge badge-secondary">+{cart?.length}</div>
					</button>
				</NavLink>
			</li>
			{/* Conditional Navbar */}
			{user ? (
				<div className=" flex items-center">
					<span className=" bg-gray-700 px-3 py-1 rounded-md">
						{' '}
						{user.displayName}{' '}
					</span>
					<li className=" uppercase ">
						<button className=" font-medium uppercase" onClick={handleLogOut}>
							Log Out
						</button>
					</li>
				</div>
			) : (
				<>
					<li className=" uppercase ">
						<NavLink
							to="/login"
							className={({ isActive }) =>
								isActive
									? ' bg-green-500 font-semibold text-white'
									: ' font-medium'
							}
						>
							Log In
						</NavLink>
					</li>
				</>
			)}
		</ul>
	);

	return (
		<div>
			<div className="navbar fixed z-10 bg-opacity-40 bg-black px-10 text-white">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navlinks}
						</ul>
					</div>
					<a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					{/* Navlinks */} {navlinks}{' '}
				</div>
				<div className="navbar-end space-x-2">
					<img className="w-[60px] h-[45px]" src={navBarImg} alt="" />
					<a className="btn">Button</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
