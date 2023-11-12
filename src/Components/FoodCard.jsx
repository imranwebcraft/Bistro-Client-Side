const FoodCard = ({ foodItem }) => {
	const { name, recipe, image, price } = foodItem || {};

	return (
		<div className=" relative bg-gray-200 rounded-md">
			<figure className="bg-cover bg-center">
				<img className=" w-full h-[200px]" src={image} alt="Food-image" />
			</figure>
			<div className=" absolute top-5 right-5  bg-slate-900 text-white inline-block px-4 py-1 rounded-md text-center">
				<p className=" font-bold">${price}</p>
			</div>
			<div className="w-full text-center space-y-3 p-3">
				<h2 className=" text-xl font-bold">{name}</h2>
				<p className=" text-gray-700 font-medium">{recipe}</p>
				{/* Butoon */}
				<div className=" flex justify-center items-center">
					<button className=" border-b-2 border-yellow-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-800 hover:-translate-y-1 transition-all duration-200 uppercase bg-gray-200 text-yellow-500">
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
