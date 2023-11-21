import SectionTitle from '../../../Components/SectionTitle';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Container from '../../../UI/Container';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();

	const { data: payments = [] } = useQuery({
		queryKey: ['Payment'],
		queryFn: async () => {
			const res = await axiosSecure.get(`/payments/${user?.email}`);
			return res.data;
		},
	});

	const sortedDate = payments.sort(
		(a, b) => new Date(b.date) - new Date(a.date)
	);
	// const sortedDate = [...payments].sort(
	// 	(a, b) => new Date(b.date) - new Date(a.date)
	// );

	return (
		<Container>
			<SectionTitle
				heading="PAYMENT HISTORY"
				subHeading="At a Glance!"
			></SectionTitle>

			<p className=" text-3xl font-semibold pb-5">
				Total Payments: {payments.length}
			</p>

			{/* Payment details table */}

			<div className="overflow-x-auto">
				<table className="table table-zebra">
					{/* head */}
					<thead className=" text-center bg-indigo-500 text-white">
						<tr>
							<th>Number</th>
							<th>Email</th>
							<th>TransID</th>
							<th>Price</th>
							<th>Date</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{sortedDate.map((payment, index) => (
							<tr className=" text-center" key={payment._id}>
								<th>{index + 1}</th>
								<td>{payment.email}</td>
								<td>{payment.transactionId}</td>
								<td>{payment.price}</td>
								<td>{payment.date}</td>
								<td>{payment.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div
				className=" flex justify-center items-center mt-16 tooltip"
				data-tip="Click to see more history"
			>
				<p className="underline decoration-2  hover:decoration-blue-500">
					See More
				</p>
			</div>
		</Container>
	);
};

export default Payment;
