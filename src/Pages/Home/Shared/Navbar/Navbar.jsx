import { NavLink } from 'react-router-dom';
import navBarImg from '../../../../assets/icon/navbarIcon.png';

const Navbar = () => {
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
			{/* <li className=" uppercase ">
				<NavLink
					to="/contact-us"
					className={({ isActive }) =>
						isActive ? ' bg-green-500 font-semibold text-white' : ' font-medium'
					}
				>
					Contact US
				</NavLink>
			</li> */}
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
