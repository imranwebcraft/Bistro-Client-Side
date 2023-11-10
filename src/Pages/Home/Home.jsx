import Banner from './Banner/Banner';
import BistroBoss from './BistroBoss/BistroBoss';
import Call from './Call/Call';
import Category from './Category/Category';
import ChefRecomendation from './ChefRecomendation/ChefRecomendation';
import PopularItems from './PopularItems/PopularItems';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<BistroBoss></BistroBoss>
			<PopularItems></PopularItems>
			<Call></Call>
			<ChefRecomendation></ChefRecomendation>
		</div>
	);
};

export default Home;
