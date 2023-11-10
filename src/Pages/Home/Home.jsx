import Banner from './Banner/Banner';
import BistroBoss from './BistroBoss/BistroBoss';
import Category from './Category/Category';
import PopularItems from './PopularItems/PopularItems';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<BistroBoss></BistroBoss>
			<PopularItems></PopularItems>
		</div>
	);
};

export default Home;
