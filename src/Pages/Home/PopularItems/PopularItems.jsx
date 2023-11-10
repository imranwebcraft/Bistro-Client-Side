import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import SectionContainer from '../../../UI/SectionContainer';
import Container from '../../../UI/Container';
import MenuItemCard from '../Shared/MenuItemCard/MenuItemCard';

const PopularItems = () => {
	// Save data to the menu
	const [menus, setMenus] = useState([]);

	// Load menu json data
	useEffect(() => {
		fetch('menu.json')
			.then(res => res.json())
			.then(data => {
				const popularItems = data.filter(item => item.category === 'popular');
				setMenus(popularItems);
			});
	}, []);

	return (
		<SectionContainer>
			<SectionTitle
				subHeading={'Check it out'}
				heading={'From our menu'}
			></SectionTitle>
			<Container>
				<div className=" grid gap-5 grid-cols-1 md:grid-cols-2">
					{menus?.map(menu => (
						<MenuItemCard key={menu._id} menu={menu}></MenuItemCard>
					))}
				</div>
			</Container>
		</SectionContainer>
	);
};

export default PopularItems;
