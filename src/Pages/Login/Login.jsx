import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/Auth.png';
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {
	// State
	const [disable, setDisable] = useState(true);
	const captchaRef = useRef();

	// Login event handler
	const handleLogin = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log({ email, password });
	};

	// Captcha Engine
	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	// Captch validation
	const handleValidateCaptcha = () => {
		const user_Capcha_Value = captchaRef.current.value;
		if (validateCaptcha(user_Capcha_Value)) {
			toast.success('Captcha Match');
			setDisable(false);
		} else {
			toast.error("Captch Don't Match");
			setDisable(true);
		}
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row">
				<div className=" w-1/2 text-center lg:text-left">
					<figure>
						<img src={loginImg} alt="" />
					</figure>
				</div>
				<div className=" w-1/2 card  shadow-2xl bg-base-100">
					<form onSubmit={handleLogin} className="card-body">
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
							/>
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
							/>
							<label className="label">
								<a className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className=" form-control">
							<LoadCanvasTemplate />
							<input
								ref={captchaRef}
								// Validate the captcha when user type the captch and click outside of the input field
								onBlur={handleValidateCaptcha}
								type="text"
								name="captch"
								placeholder="Type captch here"
								className="input input-bordered"
								required
							/>
						</div>
						{/* Or validate the captch with a button click */}
						{/* <div>
							<button
								onClick={handleValidateCaptcha}
								className=" btn btn-block hover:bg-red-500  hover:text-white btn-xs normal-case"
							>
								Validate Captcha
							</button>
						</div> */}
						<div className="form-control mt-6">
							<button
								disabled={disable}
								type="submit"
								className="btn btn-primary"
							>
								Log In
							</button>
						</div>

						<div className=" text-center mt-2">
							<p>
								Don&apos;t have an account?
								<Link
									to={'/signup'}
									className=" px-1 text-yellow-500 hover:underline hover:cursor-pointer"
								>
									Sign Up
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

export default Login;
