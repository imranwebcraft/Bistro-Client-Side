import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
	const axiosPublic = useAxiosPublic();
	const { data: menus = [], refetch } = useQuery({
		queryKey: ['menu'],
		queryFn: async () => {
			const res = await axiosPublic.get('/menu');
			return res?.data;
		},
	});

	return [menus, refetch];
};

export default useMenu;
