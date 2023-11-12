import MenuItemCard from '../../Home/Shared/MenuItemCard/MenuItemCard';

const MenuCategory = ({ items, btnText }) => {
	return (
		<div className=" pt-16">
			<div className=" grid gap-5 grid-cols-1 md:grid-cols-2">
				{items?.map(menu => (
					<MenuItemCard key={menu._id} menu={menu}></MenuItemCard>
				))}
			</div>

			{/* Butoon */}
			<div className=" flex justify-center items-center pt-10">
				<button className=" border-b-2 border-gray-900 px-2 py-2 rounded-lg text-lg font-medium hover:-translate-y-1 transition-all duration-200 uppercase bg-gray-50">
					{btnText}
				</button>
			</div>
		</div>
	);
};

export default MenuCategory;
