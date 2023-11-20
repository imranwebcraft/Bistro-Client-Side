import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { TiTick } from 'react-icons/ti';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
	// jehetu user must login thaka lagbe, tai user er token o check korbo tai secure ta use koralam
	const axiosSecure = useAxiosSecure();
	const [cart, refetch] = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();
	const totalPrice = cart?.reduce((prev, current) => prev + current.price, 0);

	const [paymentError, setPaymentError] = useState(false);
	const [clientSecret, setClientSecret] = useState('');
	const [transactionId, setTransactionId] = useState('');

	const stripe = useStripe();
	const elements = useElements();

	/**
	 * 1. Jehetu backend theke price expect kore, so price must pathano lagbe
	 * so er jonno cart er information lagbe
	 * 2. user er information o pathabo, jemon name, email
	 */

	useEffect(() => {
		{
			cart.length &&
				axiosSecure
					.post('/create-payment-intent', { price: totalPrice })
					.then((res) => {
						setClientSecret(res?.data?.clientSecret);
					});
		}
	}, [axiosSecure, totalPrice, cart.length]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Dont go forward if stripe and element isn't load yet
		if (!stripe || !elements) {
			return;
		}

		// If stripe and elemet load successsful then create a card with cardElement
		const card = elements.getElement(CardElement);

		// If card is null don't go forward

		if (card == null) {
			return;
		}

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			console.log('Payment error', error);
			setPaymentError(error.message);
		} else {
			console.log('Payment method', paymentMethod);
			setPaymentError(false);
		}

		// Confirm the payment

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: user?.displayName || 'anonymous',
						email: user?.email || 'anonymous',
					},
				},
			});

		if (confirmError) {
			console.log('Error from confirm', confirmError);
		} else {
			console.log('payment intent', paymentIntent);
			if (paymentIntent.status === 'succeeded') {
				const transId = paymentIntent.id;
				setTransactionId(transId);

				// Send payment details to the server side and store to show payment history
				const payment = {
					email: user?.email,
					price: totalPrice,
					transactionId: transId,
					date: new Date(),
					cartIds: cart.map((item) => item._id),
					menuIds: cart.map((item) => item.menuId),
					status: 'pending',
				};
				const res = await axiosSecure.post('/payments', payment);
				console.log(res);
				if (res.data.paymentResult.insertedId) {
					toast.success('Payment Confirmed');
				}
				if (res.data.deleteResult.deletedCount) {
					refetch();
					toast.success('Cart Items Clear');
					// Navigate the user to the payment history page
					navigate('/dashboard/payment');
				}
			}
		}
	};

	return (
		<div>
			<div className=" text-3xl font-semibold pb-10">
				Charge Ammount: ${totalPrice}
			</div>

			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button
					className=" block hover:cursor-pointer tracking-wider px-5 py-2 bg-emerald-500 hover:bg-emerald-600 transition-colors duration-300 rounded-md text-white mt-5"
					type="submit"
					disabled={!stripe || !clientSecret}
				>
					Pay
				</button>

				{/* Show card payment successfull transaction ID */}
				{transactionId && (
					<p className=" text-green-500">
						Your transactionId:{' '}
						<span className=" text-indigo-500 text-lg">{transactionId}</span>
					</p>
				)}

				{/* Show card error */}
				{paymentError ? (
					<span className=" text-red-500 mt-2">{paymentError}</span>
				) : (
					<span className="text-green-500 mt-2 flex items-center">
						<TiTick className=" text-xl"></TiTick>
						<span>All looks good</span>
					</span>
				)}
			</form>
		</div>
	);
};

export default CheckOutForm;
