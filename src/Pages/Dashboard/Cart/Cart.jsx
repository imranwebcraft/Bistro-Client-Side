import { FaTrashCan } from 'react-icons/fa6';
import SectionTitle from '../../../Components/SectionTitle';
import useCart from '../../../Hooks/useCart';
import Container from '../../../UI/Container';

const Cart = () => {
	// Hook
	const [cart] = useCart();
	// Calculate the total price
	const totalPrice = cart?.reduce((prev, current) => prev + current.price, 0);

	return (
		<div>
			<Container>
				<SectionTitle
					heading="WANNA ADD MORE?"
					subHeading="My Cart "
				></SectionTitle>

				{/* Main Cart Part */}

				<div>
					{/* Top Part */}
					<div className=" flex items-center justify-around bg-emerald-500 py-4 px-2 rounded-md rounded-b-none text-white">
						<h3 className=" text-2xl font-medium">
							Total Order: {cart?.length}
						</h3>
						<h3 className=" text-2xl font-medium">
							Total Price: ${totalPrice}
						</h3>
						<h3 className=" text-2xl font-medium">Pay</h3>
					</div>

					{/* Table Part */}
					<div className="overflow-x-auto border">
						<table className="table">
							{/* head */}
							<thead>
								<tr>
									<th>Count</th>
									<th>Image</th>
									<th>Name</th>
									<th>Price</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}

								{cart?.map((item, index) => (
									<tr key={item._id}>
										<td>
											<span>{index + 1}</span>
										</td>
										<td>
											<div className="flex items-center gap-3">
												<div className="avatar">
													<div className="mask mask-squircle w-12 h-12">
														<img src={item.image} alt="food Image" />
													</div>
												</div>
											</div>
										</td>
										<td>{item?.name}</td>
										<td>{item?.price}</td>
										<th>
											<FaTrashCan className=" text-base hover:text-red-500 hover:cursor-pointer duration-300 transition-all "></FaTrashCan>
										</th>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Cart;
