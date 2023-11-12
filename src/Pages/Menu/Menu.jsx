import { Helmet } from 'react-helmet-async';
import Cover from '../Home/Shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg';
import useMenu from '../../Hooks/useMenu';
import SectionContainer from '../../UI/SectionContainer';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import Container from '../../UI/Container';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';

const Menu = () => {
	const [menus] = useMenu();
	// Category items data
	const offered = menus.filter(menuItem => menuItem.category === 'offered');
	const desserts = menus.filter(menuItem => menuItem.category === 'dessert');
	const pizza = menus.filter(menuItem => menuItem.category === 'pizza');
	const salad = menus.filter(menuItem => menuItem.category === 'salad');
	const soup = menus.filter(menuItem => menuItem.category === 'soup');

	return (
		<div>
			<Helmet>
				<title>Bistro | Menu</title>
			</Helmet>
			<Cover
				img={img}
				heading={'our menu'}
				subheading={'Would you like to try a dish?'}
			/>
			{/* Offerded Items Section*/}
			<SectionContainer>
				<Container>
					<SectionTitle
						subHeading="Don't Miss"
						heading="Todays offer"
					></SectionTitle>
					<MenuCategory items={offered} btnText="Order Now"></MenuCategory>
				</Container>
			</SectionContainer>

			{/* Desserts Section */}
			<SectionContainer>
				<Cover
					img={dessertImg}
					heading="DESSERTS"
					subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				></Cover>
				<Container>
					<MenuCategory
						items={desserts}
						btnText="Order Now"
						category={'dessert'}
					></MenuCategory>
				</Container>
			</SectionContainer>
			{/* Pizza Section */}
			<SectionContainer>
				<Cover
					img={pizzaImg}
					heading="pizza"
					subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				></Cover>
				<Container>
					<MenuCategory
						items={pizza}
						btnText="Order Now"
						category={'pizza'}
					></MenuCategory>
				</Container>
			</SectionContainer>
			{/* Salad Section */}
			<SectionContainer>
				<Cover
					img={saladImg}
					heading="Salad"
					subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				></Cover>
				<Container>
					<MenuCategory
						items={salad}
						btnText="Order Now"
						category={'salad'}
					></MenuCategory>
				</Container>
			</SectionContainer>
			{/* Soup Section */}
			<SectionContainer>
				<Cover
					img={soupImg}
					heading="Soup"
					subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				></Cover>
				<Container>
					<MenuCategory
						items={soup}
						btnText="Order Now"
						category={'soup'}
					></MenuCategory>
				</Container>
			</SectionContainer>
		</div>
	);
};

export default Menu;
