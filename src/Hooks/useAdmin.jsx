import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import auth from '../Config/Firebase.config';
import useAuth from './useAuth';

const useAdmin = () => {
	const { loading } = useAuth();
	const axiosSecure = useAxiosSecure();
	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		enabled: !loading,
		queryKey: ['isAdmin'],
		queryFn: async () => {
			const res = await axiosSecure.get(
				`/users/admin/${auth?.currentUser?.email}`
			);
			return res.data.isAdmin;
		},
	});
	return [isAdmin, isAdminLoading];
};

export default useAdmin;
