import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { FaBook, FaDollarSign, FaUser } from 'react-icons/fa6';
import { MdFastfood } from 'react-icons/md';
const AdminHome = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();

	// 	res.send({
	// 	users,
	// 	menuItems,
	// 	orders,
	// 	revenue,
	// });

	const { data: stats = [] } = useQuery({
		queryKey: ['admin-stats'],
		queryFn: async () => {
			const res = await axiosSecure.get('/admin-stats');
			return res.data;
		},
	});

	return (
		<div className=" space-y-5">
			{/* Welcome message*/}
			<span className=" text-3xl font-semibold">
				Hi, Welcome {user?.displayName ? user?.displayName : 'Back'}
			</span>

			{/* Stats */}

			<div className="stats shadow w-full">
				<div className="stat place-items-center">
					<div className="stat-title text-2xl font-semibold text-black">
						Revenue{' '}
						<FaDollarSign className=" inline-block text-green-500"></FaDollarSign>
					</div>
					<div className="stat-value">$ {stats.revenue}</div>
				</div>

				<div className="stat place-items-center">
					<div className="stat-title text-2xl font-semibold text-black">
						Users <FaUser className=" inline-block text-emerald-500"></FaUser>
					</div>
					<div className="stat-value text-secondary">{stats.users}</div>
				</div>

				<div className="stat place-items-center">
					<div className="stat-title text-2xl font-semibold text-black">
						Menu Items
						<MdFastfood className=" inline-block text-indigo-500"></MdFastfood>
					</div>
					<div className="stat-value">{stats.menuItems}</div>
				</div>
				<div className="stat place-items-center">
					<div className="stat-title text-2xl font-semibold text-black">
						Orders <FaBook className=" inline-block text-purple-500"></FaBook>
					</div>
					<div className="stat-value">{stats.orders}</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
