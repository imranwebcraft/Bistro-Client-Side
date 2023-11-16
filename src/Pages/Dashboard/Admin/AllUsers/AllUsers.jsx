import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../../Components/SectionTitle';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Container from '../../../../UI/Container';
import { FaTrashCan, FaUser, FaUsers } from 'react-icons/fa6';

const AllUsers = () => {
	const axiosSecure = useAxiosSecure();

	const { data: users = [] } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const res = await axiosSecure.get('/users');
			return res.data;
		},
	});

	console.log(users);

	const handleDeleteUser = user => {
		console.log('delete this user', user?._id);
	};

	return (
		<Container>
			<SectionTitle
				heading="manage all users"
				subHeading="How Many"
			></SectionTitle>

			{/* Main Cart Part */}

			<div>
				{/* Top Part */}
				<div className="bg-amber-500 py-4 px-2 rounded-md rounded-b-none text-white">
					<h3 className=" text-2xl font-medium">
						Total Users: {users?.length}
					</h3>
				</div>

				{/* Table Part */}
				<div className="overflow-x-auto border">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th>Count</th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{users?.map((user, index) => (
								<tr key={user._id}>
									<td>
										<span>{index + 1}</span>
									</td>
									<td>
										<p> {user?.name} </p>
									</td>
									<td>{user?.email}</td>
									<td>
										<button
											// onClick={() => handleDeleteUser(user)}
											className=" btn bg-amber-500 group"
										>
											<FaUsers className=" text-xl text-white group-hover:text-green-600 hover:cursor-pointer duration-300 transition-all "></FaUsers>
										</button>
									</td>
									<th>
										<button
											onClick={() => handleDeleteUser(user)}
											className=" btn bg-red-500 hover:bg-white group"
										>
											<FaTrashCan className=" text-base text-white group-hover:text-red-600 hover:cursor-pointer duration-300 transition-all "></FaTrashCan>
										</button>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Container>
	);
};

export default AllUsers;
