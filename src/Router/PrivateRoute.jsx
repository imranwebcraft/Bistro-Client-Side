import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
	const { loading, user } = useAuth();

	const location = useLocation();

	if (loading) {
		return (
			<div className=" h-screen flex justify-center items-center">
				<progress className="progress w-56"></progress>
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to={'/login'} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
