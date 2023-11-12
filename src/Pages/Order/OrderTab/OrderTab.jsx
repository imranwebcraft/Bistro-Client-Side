import FoodCard from '../../../Components/FoodCard';

const OrderTab = ({ orderItems }) => {
	return (
		<div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{orderItems?.map(foodItem => (
				<FoodCard key={foodItem._id} foodItem={foodItem}></FoodCard>
			))}
		</div>
	);
};

export default OrderTab;
