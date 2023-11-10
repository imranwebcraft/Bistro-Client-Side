import Container from '../../../UI/Container';
import SectionContainer from '../../../UI/SectionContainer';
import './BistroBoss.css';

const BistroBoss = () => {
	return (
		<SectionContainer>
			<Container>
				<div className=" p-28  bistro-boss-bg-image bg-fixed">
					<div className="text-center p-28 bg-white rounded-md space-y-2">
						<h1 className=" text-5xl font-semibold">Bistro Boss</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus, libero accusamus laborum deserunt ratione dolor
							officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
							nihil iusto ducimus incidunt quibusdam nemo.
						</p>
					</div>
				</div>
			</Container>
		</SectionContainer>
	);
};

export default BistroBoss;
