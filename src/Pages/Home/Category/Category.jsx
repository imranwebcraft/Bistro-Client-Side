import Container from '../../../UI/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './Catrgory.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionContainer from '../../../UI/SectionContainer';
import SectionTitle from '../../../Components/SectionTitle';

const Category = () => {
	return (
		<SectionContainer>
			<Container>
				<SectionTitle
					subHeading={'From 11:00am to 10:00pm'}
					heading={'ORDER ONLINE'}
				></SectionTitle>
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<img src={img1} alt="" />
						<p className=" text-2xl uppercase -mt-28 text-center font-semibold text-white drop-shadow-lg">
							Salads
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<img src={img2} alt="" />
						<p className=" text-2xl uppercase -mt-28 text-center font-semibold text-white drop-shadow-lg">
							Pizzas
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<img src={img3} alt="" />
						<p className=" text-2xl uppercase -mt-28 text-center font-semibold text-white drop-shadow-lg">
							Soups
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<img src={img4} alt="" />
						<p className=" text-2xl uppercase -mt-28 text-center font-semibold text-white drop-shadow-lg">
							desserts
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<img src={img5} alt="" />
						<p className=" text-2xl uppercase -mt-28 text-center font-semibold text-white drop-shadow-lg">
							slads
						</p>
					</SwiperSlide>
				</Swiper>
			</Container>
		</SectionContainer>
	);
};

export default Category;
