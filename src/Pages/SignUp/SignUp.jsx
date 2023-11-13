import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/Auth.png';

const SignUp = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="w-1/2 text-center lg:text-left">
					<figure>
						<img src={loginImg} alt="" />
					</figure>
				</div>
				<div className="w-1/2 card shadow-2xl bg-base-100">
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn btn-primary">
								Sign Up
							</button>
						</div>

						<div className=" text-center mt-2">
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

						<div className=" text-center mt-2">
							<Link
								to={'/'}
								className="text-indigo-500 font-semibold bg-gray-200 hover:bg-gray-300 transition-all duration-300 px-3 py-1 rounded-sm text-center"
							>
								Home
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
