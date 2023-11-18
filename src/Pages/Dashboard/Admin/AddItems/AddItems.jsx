import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../Components/SectionTitle';
import Container from '../../../../UI/Container';
import { DevTool } from '@hookform/devtools';
import { FaUtensils } from 'react-icons/fa6';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
	// Jehetu eta secure call hobe na, publicly image host korteci
	const axiosPublic = useAxiosPublic();
	// use axiosSecure to post menu item data to the database
	const axiosSecure = useAxiosSecure();

	const {
		formState: { errors },
		register,
		handleSubmit,
		control,
		reset,
	} = useForm();
	const onSubmit = async data => {
		console.log(data);
		// step -1:  Uploda the image to the imagebb
		// const imageFile = { image: data.image[0] };
		// formData name is more preferable
		const formData = { image: data.image[0] };
		console.log(formData);
		const res = await axiosPublic.post(image_hosting_api, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		if (res.data.success) {
			// Now send the data to the database with the image url
			// Menu item object
			const menuItem = {
				name: data.name,
				recipe: data.recipe,
				image: res.data.data.display_url,
				category: data.category,
				price: parseFloat(data.price),
			};
			// Send menuItem to the databse
			const menuRes = await axiosSecure.post('/menu', menuItem);
			if (menuRes.data.insertedId) {
				toast.success(`${data.name} is added to the database`);
				reset();
			}
		}
	};
	return (
		<div>
			<Container>
				<SectionTitle
					heading="add an items"
					subHeading="what's new?"
				></SectionTitle>

				{/* Add items form */}

				<div className=" bg-gray-100 p-10 rounded-lg">
					{/* Call back function hisabe nijer make kora fucntion dite hobe */}
					<form onSubmit={handleSubmit(onSubmit)}>
						{/* Register mean data parameter er moddhe field gulo ke add kora */}

						{/* Recipe Name */}
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text">
									Recipe Name<span className=" text-red-600">*</span>
								</span>
							</label>
							<input
								{...register('name', { required: true })}
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full"
							/>
							{errors.name?.type === 'required' && (
								<p className="text-red-500">Recipe name is required</p>
							)}
						</div>
						{/* Flex div */}

						{/* Recipe Category and Price */}
						<div className=" flex gap-6">
							<div className="form-control w-full flex-1">
								<label className="label">
									<span className="label-text">
										Category<span className=" text-red-600">*</span>
									</span>
								</label>
								<select
									defaultValue="default"
									{...register('category', { required: true })}
									className="select select-bordered w-full"
								>
									<option disabled value="default">
										Please select a category
									</option>
									<option value="salad">Salad</option>
									<option value="pizza">Pizza</option>
									<option value="soup">Soup</option>
									<option value="desser">Desser</option>
									<option value="drinks">Drinks</option>
								</select>
								{errors.category?.type === 'required' && (
									<p className="text-red-500">Category name is required</p>
								)}
							</div>
							<div className="form-control w-full flex-1">
								<label className="label">
									<span className="label-text">
										Price<span className=" text-red-600">*</span>
									</span>
								</label>
								<input
									{...register('price', { required: true })}
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full"
								/>
								{errors.price?.type === 'required' && (
									<p className="text-red-500">Price field is required</p>
								)}
							</div>
						</div>

						{/* Text Area */}
						{/* Recipe Details*/}
						<div className="form-control">
							<label className="label">
								<span className="label-text">
									Details<span className=" text-red-600">*</span>
								</span>
							</label>
							<textarea
								{...register('recipe', { required: true })}
								className="textarea textarea-bordered h-24"
								placeholder="Recipe Details"
							></textarea>
							{errors.name?.recipe === 'required' && (
								<p className="text-red-500">Recipe details is required</p>
							)}
						</div>

						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">
									Recipe Image<span className=" text-red-600">*</span>
								</span>
							</label>
							<input
								{...register('image', { required: true })}
								type="file"
								className="file-input file-input-bordered w-full max-w-xs"
							/>
							{errors.image?.type === 'required' && (
								<p className="text-red-500">Recipe image is required</p>
							)}
						</div>

						<button
							type="submit"
							className=" mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-amber-400 to-amber-500"
						>
							Add Items<FaUtensils className=" inline"></FaUtensils>
						</button>
					</form>
					<DevTool control={control} />
				</div>
			</Container>
		</div>
	);
};

export default AddItems;
