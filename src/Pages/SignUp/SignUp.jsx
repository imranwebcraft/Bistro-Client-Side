import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/Auth.png';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin';

const SignUp = () => {
	const { createUser, updateUserProfile } = useAuth();
	const navigate = useNavigate();
	const axiosPublic = useAxiosPublic();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = data => {
		createUser(data?.email, data?.password)
			.then(result => {
				console.log(result.user);
				toast.success('User create successfull');

				updateUserProfile(data.name, data.photo)
					.then(() => {
						toast.success('User profile update successfull');

						// MARK::: Save user info to the database

						const userInfo = {
							name: data.name,
							email: data.email,
						};

						axiosPublic
							.post('/users', userInfo)
							.then(res => {
								if (res.data.insertedId) {
									Swal.fire({
										title: 'Success!',
										text: 'User info set to the database',
										timer: 1500,
									});
									navigate('/');
								}
							})
							.catch(err => {
								toast.error(err.message);
							});
					})
					.catch(() => {
						toast.error('Unable to update user profile');
					});
				reset();
			})
			.catch(error => {
				console.log(error);
				toast.error(error.message);
			});
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<Helmet>
				<title>Bistro | Sign Up</title>
			</Helmet>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="w-1/2 text-center lg:text-left">
					<figure>
						<img src={loginImg} alt="" />
					</figure>
				</div>
				<div className="w-1/2 card shadow-2xl bg-base-100">
					<form onSubmit={handleSubmit(onSubmit)} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="Name"
								className="input input-bordered"
								required
								{...register('name', { required: true })}
							/>
							{errors.name?.type === 'required' && (
								<span className=" text-red-600">Name is required</span>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo URL</span>
							</label>
							<input
								type="text"
								placeholder="Photo URL"
								className="input input-bordered"
								required
								{...register('photo', { required: true })}
							/>
							{errors.photo?.type === 'required' && (
								<span className=" text-red-600">Photo is required</span>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
								{...register('email', { required: true })}
							/>
							{errors.email?.type === 'required' && (
								<span className=" text-red-600">Email is required</span>
							)}
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
								{...register('password', {
									required: true,
									minLength: 6,
									maxLength: 12,
									pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
								})}
							/>
							{errors.password?.type === 'required' && (
								<span className=" text-red-600">Password is required</span>
							)}
							{errors.password?.type === 'pattern' && (
								<span className=" text-red-600">
									Password must have one upperacase, one lowercase, one special
									character and one number
								</span>
							)}
							{errors.password?.type === 'minLength' && (
								<span className=" text-red-600">
									Password must be 6 character
								</span>
							)}
							{errors.password?.type === 'maxLength' && (
								<span className=" text-red-600">
									Password can not be more than 12 character
								</span>
							)}
						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn btn-primary">
								Sign Up
							</button>
						</div>

						<div className=" text-center my-2">
							<p>
								Already have an account?
								<Link
									to={'/login'}
									className=" px-1 text-yellow-500 hover:underline hover:cursor-pointer"
								>
									Log In
								</Link>
							</p>
						</div>

						{/* Social Login*/}
						<SocialLogin></SocialLogin>
						<div className="divider"></div>
						<div className=" text-center">
							<Link
								to={'/'}
								className="text-indigo-500 font-semibold bg-gray-200 hover:bg-gray-300 transition-all duration-300 px-3 py-1 rounded-sm text-center"
							>
								Home
							</Link>
						</div>
					</form>
					<DevTool control={control} />
				</div>
			</div>
		</div>
	);
};

export default SignUp;
