import Banner from './Banner/Banner';
import BistroBoss from './BistroBoss/BistroBoss';
import Call from './Call/Call';
import Category from './Category/Category';
import ChefRecomendation from './ChefRecomendation/ChefRecomendation';
import Feature from './Feature/Feature';
import PopularItems from './PopularItems/PopularItems';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<BistroBoss></BistroBoss>
			<PopularItems></PopularItems>
			<Call></Call>
			<ChefRecomendation></ChefRecomendation>
			<Feature></Feature>
			<Testimonials></Testimonials>
		</div>
	);
};

export default Home;
