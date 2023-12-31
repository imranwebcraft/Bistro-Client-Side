import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/Auth.png';
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../Components/SocialLogin';

const Login = () => {
	const { logIn } = useAuth();

	const location = useLocation();
	const navigate = useNavigate();

	console.log(location.state);

	// State
	// eslint-disable-next-line no-unused-vars
	const [disable, setDisable] = useState(true);
	const captchaRef = useRef();

	// Login event handler
	const handleLogin = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		logIn(email, password)
			.then(result => {
				console.log(result.user);
				toast.success('Log In successfull!');
				// Navigate the user their desire location
				navigate(location.state ? location.state.from.pathname : '/');
			})
			.catch(error => {
				console.log(error.message);
				toast.error(error.message);
			});
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
			<Helmet>
				<title>Bistro | Log In</title>
			</Helmet>
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
							/>
						</div>

						<div className="form-control mt-6">
							<button
								// Todo: Enable captcha validation
								disabled={false}
								type="submit"
								className="btn btn-primary"
							>
								Log In
							</button>
						</div>

						<div className=" text-center my-2">
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

						{/* Social Login */}
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
				</div>
			</div>
		</div>
	);
};

export default Login;
