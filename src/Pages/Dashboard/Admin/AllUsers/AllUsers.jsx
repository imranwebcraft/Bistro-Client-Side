import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../../Components/SectionTitle';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Container from '../../../../UI/Container';
import { FaTrashCan, FaUsers } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const AllUsers = () => {
	const axiosSecure = useAxiosSecure();

	const { data: users = [], refetch } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const res = await axiosSecure.get('/users');
			return res.data;
		},
	});

	console.log(users);

	const handleDeleteUser = user => {
		Swal.fire({
			title: 'Delete This User?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				axiosSecure
					.delete(`/users/${user?._id}`)
					.then(res => {
						console.log(res.data);
						if (res?.data?.deletedCount) {
							// Call refetch to update the cart number
							refetch();
							Swal.fire({
								title: 'Deleted!',
								text: 'User Deleted Successfull',
								icon: 'success',
							});
						}
					})
					.catch(error => {
						console.log(error);
						toast.error('Something went wrong!😥');
					});
			}
		});
	};

	const handleMakeAdmin = user => {
		axiosSecure
			.patch(`/users/admin/${user?._id}`)
			.then(res => {
				refetch();
				if (res.data.modifiedCount) {
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Attention!',
						text: `${user?.name} is now Admin.`,
						timer: 1500,
					});
				}
			})
			.catch(err => {
				console.log(err.message);
			});
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
										{user?.role == 'admin' ? (
											<div>
												<p className=" bg-green-500 px-3 py-1 rounded-md inline-block text-white font-medium">
													Admin
												</p>
											</div>
										) : (
											<>
												<button
													onClick={() => handleMakeAdmin(user)}
													className=" btn bg-amber-500 group"
												>
													<FaUsers className=" text-xl text-white group-hover:text-green-600 hover:cursor-pointer duration-300 transition-all "></FaUsers>
												</button>
											</>
										)}
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
