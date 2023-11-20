import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../Components/SectionTitle';
import Container from '../../../UI/Container';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const MakePayment = () => {
	return (
		<Container>
			<SectionTitle
				subHeading="Please pay to eat"
				heading="Payment"
			></SectionTitle>
			<div>
				<Elements stripe={stripePromise}>
					<CheckOutForm></CheckOutForm>
				</Elements>
			</div>
		</Container>
	);
};

export default MakePayment;
