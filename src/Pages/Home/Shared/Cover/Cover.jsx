import { Parallax } from 'react-parallax';

const Cover = ({ img, heading, subheading }) => {
	return (
		<Parallax
			blur={{ min: -25, max: 25 }}
			bgImage={img}
			bgImageAlt="the dog"
			strength={200}
		>
			<div className="hero px-[300px] py-[110px]">
				<div className="hero-content text-center text-neutral-content bg-black bg-opacity-50 px-[400px] py-[100px] rounded-md">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
						<p className="mb-5">{subheading}</p>
					</div>
				</div>
			</div>
		</Parallax>
	);
};

export default Cover;
