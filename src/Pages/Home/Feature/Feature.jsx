import SectionTitle from '../../../Components/SectionTitle';
import SectionContainer from '../../../UI/SectionContainer';
import featureImg from '../../../assets/home/featured.jpg';
import './Feature.css';

const Feature = () => {
	return (
		<SectionContainer>
			<div className=" relative feature-bg bg-fixed px-[300px] py-[100px]">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-60"></div>
				<div className=" relative z-50">
					<SectionTitle
						subHeading={'Check it out'}
						heading={'FROM OUR MENU'}
						color={'text-white'}
					></SectionTitle>

					<div className=" flex gap-5 items-center justify-center">
						<figure>
							<img src={featureImg} alt="" />
						</figure>
						<div className=" space-y-2 text-white">
							<h3>
								March 20, 2023 <br /> WHERE CAN I GET SOME?
							</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repudiandae earum, explicabo rerum minus voluptate ullam
								consequuntur pariatur ipsam dolorem eligendi magnam animi
								aliquid ab optio aliquam quidem repellat praesentium. Doloremque
								esse eum fugit, fuga possimus ullam blanditiis iusto labore
								sint!
							</p>
							{/* Butoon */}
							<div className=" flex justify-start">
								<button className=" border-b-2 border-yellow-500 px-4 py-2 rounded-lg font-medium hover:-translate-y-1 transition-all duration-200 uppercase bg-gray-200 text-yellow-500">
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default Feature;
