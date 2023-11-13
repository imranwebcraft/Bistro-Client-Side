import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({ foodItem }) => {
	// Destructure
	const { name, recipe, image, price, _id } = foodItem || {};
	// Hook
	const navigate = useNavigate();
	const location = useLocation();

	// Auth context
	const { user } = useAuth();

	const handleAddToCart = () => {
		if (user && user?.email) {
			// Todo: Add items data to the database
			const cartItem = {
				menuId: _id,
				email: user?.email,
				name,
				image,
				price,
			};
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
