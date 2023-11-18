import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
	const axiosPublic = useAxiosPublic();
	const {
		data: menus = [],
		isLoading: loading,
		refetch,
	} = useQuery({
		queryKey: ['menue'],
		queryFn: async () => {
			const res = await axiosPublic.get('/menu');
			return res?.data;
		},
	});

	return [menus, loading, refetch];
};

export default useMenu;
