import { FaTrashCan } from 'react-icons/fa6';
import SectionTitle from '../../../../Components/SectionTitle';
import useMenu from '../../../../Hooks/useMenu';
import Container from '../../../../UI/Container';
import { FiEdit } from 'react-icons/fi';

const ManageItems = () => {
	const [menus, loading, refetch] = useMenu();
	console.log(menus);

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
							<tr className=" text-center">
								<th>Count</th>
								<th>Item Image</th>
								<th>Item Name</th>
								<th>Price</th>
								<th>Action</th>
								<th>Action</th>
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
												className=" w-[100px] h-[80px]"
												src={menu.image}
												alt=""
											/>
										</figure>
									</td>
									<td>{menu?.name}</td>
									<td>{menu?.price}</td>
									<td>
										<button className=" btn bg-amber-500 group">
											<FiEdit className=" text-xl text-white group-hover:text-green-600 hover:cursor-pointer duration-300 transition-all "></FiEdit>
										</button>
									</td>
									<td>
										<button className=" btn bg-red-500 hover:bg-white group">
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
