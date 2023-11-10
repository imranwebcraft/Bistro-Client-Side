const MenuItemCard = ({ menu }) => {
	const { name, recipe, image, price } = menu || {};

	return (
		<div>
			<div className=" flex gap-2">
				{/* Left */}
				<figure>
					<img
						style={{ borderRadius: '0px 200px 200px 200px' }}
						className=" w-[120px] h-[90px]"
						src={image}
						alt=""
					/>
				</figure>
				{/* Moddle */}
				<div className=" flex flex-col justify-center">
					<h3 className=" uppercase text-3xl">{name} --------</h3>
					<p className=" text-gray-700">{recipe}</p>
				</div>
				{/* Right */}
				<div>
					<p className=" text-yellow-500 font-medium">${price}</p>
				</div>
			</div>
		</div>
	);
};

export default MenuItemCard;
