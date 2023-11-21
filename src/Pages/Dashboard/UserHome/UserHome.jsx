import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {
	const { user } = useAuth();
	return (
		<div>
			{/* Welcome message*/}
			<span className=" text-3xl font-semibold">
				Hi, Welcome {user?.displayName ? user?.displayName : 'Back'}
			</span>
		</div>
	);
};

export default UserHome;
