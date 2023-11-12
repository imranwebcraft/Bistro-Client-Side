import Cover from '../Home/Shared/Cover/Cover';
import orderImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionContainer from '../../UI/SectionContainer';
import Container from '../../UI/Container';
import { useState } from 'react';
import './Order.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
	const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
	const { category } = useParams();
	// category jeta astece, setake amra categories er moddhe theke khoj korci, setar index koto. Sei index take set korteci
	const initialIndex = categories.indexOf(category);
	const [tabIndex, setTabIndex] = useState(initialIndex);
	const [menus] = useMenu();

	const dessert = menus.filter(menuItem => menuItem.category === 'dessert');
	const pizza = menus.filter(menuItem => menuItem.category === 'pizza');
	const salad = menus.filter(menuItem => menuItem.category === 'salad');
	const soup = menus.filter(menuItem => menuItem.category === 'soup');
	const drinks = menus.filter(menuItem => menuItem.category === 'drinks');

	return (
		<div>
			<Helmet>
				<title>Bistro | Order</title>
			</Helmet>

			<Cover
				img={orderImg}
				subheading="Would you like to try a dish?"
				heading="Our Shop"
			></Cover>

			<SectionContainer>
				<Container>
					<Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
						<TabList>
							<Tab>Salad</Tab>
							<Tab>Pizza</Tab>
							<Tab>Soup</Tab>
							<Tab>Dessert</Tab>
							<Tab>Drinks</Tab>
						</TabList>

						<TabPanel>
							<OrderTab orderItems={salad}></OrderTab>
						</TabPanel>
						<TabPanel>
							<OrderTab orderItems={pizza}></OrderTab>
						</TabPanel>
						<TabPanel>
							<OrderTab orderItems={soup}></OrderTab>
						</TabPanel>
						<TabPanel>
							<OrderTab orderItems={dessert}></OrderTab>
						</TabPanel>
						<TabPanel>
							<OrderTab orderItems={drinks}></OrderTab>
						</TabPanel>
					</Tabs>
				</Container>
			</SectionContainer>
		</div>
	);
};

export default Order;
