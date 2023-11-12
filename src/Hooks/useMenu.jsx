import { useEffect, useState } from 'react';

const useMenu = () => {
	// Save data to the menu
	const [menus, setMenus] = useState([]);
	const [loading, setLoading] = useState(true);

	// Load menu json data
	useEffect(() => {
		fetch('http://localhost:5000/menu')
			.then(res => res.json())
			.then(data => {
				setMenus(data);
				setLoading(false);
			});
	}, [setLoading]);

	return [menus, loading];
};

export default useMenu;
