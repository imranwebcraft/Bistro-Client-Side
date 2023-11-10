const SectionTitle = ({ subHeading, heading, color }) => {
	return (
		<div
			className={`space-y-2 flex flex-col justify-center items-center mb-7  w-1/2 mx-auto ${color}`}
		>
			<p className=" text-yellow-500 italic">---{subHeading}----</p>
			<h3 className="text-4xl font-semibold border-y-2 py-2 uppercase">
				{heading}
			</h3>
		</div>
	);
};

export default SectionTitle;
