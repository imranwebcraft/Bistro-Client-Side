import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useCart from '../Hooks/useCart';

const FoodCard = ({ foodItem }) => {
	// Destructure
	const { name, recipe, image, price, _id } = foodItem || {};
	// Hook
	const [, refetch] = useCart();
	const navigate = useNavigate();
	const location = useLocation();

	// Auth context
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();

	const handleAddToCart = () => {
		if (user && user?.email) {
			const cartItem = {
				menuId: _id,
				email: user?.email,
				name,
				image,
				price,
			};
			axiosSecure
				.post('/carts', cartItem)
				.then(res => {
					if (res.data.insertedId) {
						toast.success(` ${name} Added to the cart!`);
					}
					// Call refetch to update the data for cart to calculate cart items count
					refetch();
				})
				.catch(error => {
					console.log(error);
					toast.error('Something went wrong!😥');
				});
		} else {
			Swal.fire({
				title: 'ATTENTION!',
				text: 'You have to Login first to add item to the cart',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Log In!',
			}).then(result => {
				if (result.isConfirmed) {
					// Private route er moto kore exactly
					navigate('/login', { state: { from: location } });
				}
			});
		}
	};

	return (
		<div className=" relative bg-gray-200 rounded-md">
			<figure className="bg-cover bg-center">
				<img
					className=" w-full h-[200px] rounded-md"
					src={image}
					alt="Food-image"
				/>
			</figure>
			<div className=" absolute top-5 right-5  bg-slate-900 text-white inline-block px-4 py-1 rounded-md text-center">
				<p className=" font-bold">${price}</p>
			</div>
			<div className="w-full text-center space-y-3 p-3">
				<h2 className=" text-xl font-bold">{name}</h2>
				<p className=" text-gray-700 font-medium">{recipe}</p>
				{/* Butoon Add To Cart*/}
				<div className=" flex justify-center items-center">
					<button
						onClick={handleAddToCart}
						className=" border-b-2 border-yellow-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-800 hover:-translate-y-1 transition-all duration-200 uppercase bg-gray-300 text-yellow-500"
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
