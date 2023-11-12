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

const Order = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [menus] = useMenu();
	// Category items data

	const desserts = menus.filter(menuItem => menuItem.category === 'dessert');
	const pizza = menus.filter(menuItem => menuItem.category === 'pizza');
	const salad = menus.filter(menuItem => menuItem.category === 'salad');
	const soup = menus.filter(menuItem => menuItem.category === 'soup');
	const drinks = menus.filter(menuItem => menuItem.category === 'drinks');

	return (
		<div>
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
							<Tab>Soups</Tab>
							<Tab>Desserts</Tab>
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
							<OrderTab orderItems={desserts}></OrderTab>
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
