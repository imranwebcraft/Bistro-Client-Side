import { FaTrashCan } from 'react-icons/fa6';
import SectionTitle from '../../../../Components/SectionTitle';
import useMenu from '../../../../Hooks/useMenu';
import Container from '../../../../UI/Container';
import { FiEdit } from 'react-icons/fi';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

const ManageItems = () => {
	const axiosSecure = useAxiosSecure();
	const [menus, refetch] = useMenu();

	// Delete event handler
	const handleDeleteItem = menu => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(async result => {
			if (result.isConfirmed) {
				const res = await axiosSecure.delete(`/menu/${menu._id}`);
				if (res.data.deletedCount) {
					// Call refetch to mount the component again
					refetch();
					Swal.fire({
						title: 'Deleted!',
						text: `${menu.name} is deleted from menu list`,
						icon: 'success',
					});
				}
			}
		});
	};

	return (
		<Container>
			<SectionTitle
				heading="manage all items"
				subHeading="Hurry Up!"
			></SectionTitle>
			{/* Show all menu item bwllow in table format */}

			<div>
				{/* Top Part */}
				<div className="bg-amber-500 py-4 px-2 rounded-md rounded-b-none text-white">
					<h3 className=" text-2xl font-medium">
						Total Items: {menus?.length}
					</h3>
				</div>

				{/* Table Part */}
				<div className="overflow-x-auto border">
					<table className="table">
						{/* head */}
						<thead>
							<tr className=" text-center bg-gray-800 text-white">
								<th>Count</th>
								<th>Item Image</th>
								<th>Item Name</th>
								<th>Price</th>
								<th>Update</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{menus?.map((menu, index) => (
								<tr key={menu._id} className=" text-center">
									<td>
										<span>{index + 1}</span>
									</td>
									<td>
										<figure>
											<img
												className=" w-[50px] h-[50px] rounded-lg"
												src={menu.image}
												alt=""
											/>
										</figure>
									</td>
									<td>{menu?.name}</td>
									<td>{menu?.price}</td>
									<td>
										<Link
											to={`/dashboard/updateItem/${menu._id}`}
											className=" btn bg-amber-500 group"
										>
											<FiEdit className=" text-xl text-white group-hover:text-green-600 hover:cursor-pointer duration-300 transition-all "></FiEdit>
										</Link>
									</td>
									<td>
										<button
											onClick={() => handleDeleteItem(menu)}
											className=" btn bg-red-500 hover:bg-white group"
										>
											<FaTrashCan className=" text-base text-white group-hover:text-red-600 hover:cursor-pointer duration-300 transition-all "></FaTrashCan>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Container>
	);
};

export default ManageItems;
