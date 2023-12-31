import { Link } from 'react-router-dom';
import MenuItemCard from '../../Home/Shared/MenuItemCard/MenuItemCard';

const MenuCategory = ({ items, btnText, category }) => {
	return (
		<div className=" pt-16">
			<div className=" grid gap-5 grid-cols-1 md:grid-cols-2">
				{items?.map(menu => (
					<MenuItemCard key={menu._id} menu={menu}></MenuItemCard>
				))}
			</div>

			{/* Butoon */}
			<Link
				to={`/order/${category}`}
				className=" flex justify-center items-center pt-10"
			>
				<button className=" border-b-2 border-gray-900 px-2 py-2 rounded-lg text-lg font-medium hover:-translate-y-1 transition-all duration-300 uppercase bg-gray-50">
					{btnText}
				</button>
			</Link>
		</div>
	);
};

export default MenuCategory;
