import Container from '../../../UI/Container';
import SectionContainer from '../../../UI/SectionContainer';
import img from '../../../assets/home/slide5.jpg';

const ChefRecomendation = () => {
	return (
		<SectionContainer>
			<Container>
				<div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<div className=" bg-gray-50 rounded-md">
						<figure className="bg-cover bg-center">
							<img className=" w-full h-[300px]" src={img} alt="Food-image" />
						</figure>
						<div className="w-full text-center space-y-3 pb-3">
							<h2 className=" text-xl font-bold">Caeser Salad</h2>
							<p className=" text-gray-700 font-medium">
								Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
							</p>
							{/* Butoon */}
							<div className=" flex justify-center items-center">
								<button className=" border-b-2 border-yellow-500 px-4 py-2 rounded-lg font-medium hover:-translate-y-1 transition-all duration-200 uppercase bg-gray-200 text-yellow-500">
									Add to cart
								</button>
							</div>
						</div>
					</div>
					<div className=" bg-gray-50 rounded-md">
						<figure className="bg-cover bg-center">
							<img className=" w-full h-[300px]" src={img} alt="Food-image" />
						</figure>
						<div className="w-full text-center space-y-3 pb-3">
							<h2 className=" text-xl font-bold">Caeser Salad</h2>
							<p className=" text-gray-700 font-medium">
								Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
							</p>
							{/* Butoon */}
							<div className=" flex justify-center items-center">
								<button className=" border-b-2 border-yellow-500 px-4 py-2 rounded-lg font-medium hover:-translate-y-1 transition-all duration-200 uppercase bg-gray-200 text-yellow-500">
									Add to cart
								</button>
							</div>
						</div>
					</div>
					<div className=" bg-gray-50 rounded-md">
						<figure className="bg-cover bg-center">
							<img className=" w-full h-[300px]" src={img} alt="Food-image" />
						</figure>
						<div className="w-full text-center space-y-3 pb-3">
							<h2 className=" text-xl font-bold">Caeser Salad</h2>
							<p className=" text-gray-700 font-medium">
								Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
							</p>
							{/* Butoon */}
							<div className=" flex justify-center items-center">
								<button className=" border-b-2 border-yellow-500 px-4 py-2 rounded-lg font-medium hover:-translate-y-1 transition-all duration-200 uppercase bg-gray-200 text-yellow-500">
									Add to cart
								</button>
							</div>
						</div>
					</div>
					<div className=" bg-gray-50 rounded-md">
						<figure className="bg-cover bg-center">
							<img className=" w-full h-[300px]" src={img} alt="Food-image" />
						</figure>
						<div className="w-full text-center space-y-3 pb-3">
							<h2 className=" text-xl font-bold">Caeser Salad</h2>
							<p className=" text-gray-700 font-medium">
								Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
							</p>
							{/* Butoon */}
							<div className=" flex justify-center items-center">
								<button className=" border-b-2 border-yellow-500 px-4 py-2 rounded-lg font-medium hover:-translate-y-1 transition-all duration-200 uppercase bg-gray-200 text-yellow-500">
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</SectionContainer>
	);
};

export default ChefRecomendation;
