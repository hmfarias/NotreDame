import { useEffect, useState } from 'react';
import { getAllCategories } from '../services';

/**
 * @description Custom Hook that implements and returns an object that corresponds to the data of all categories of product. ONLY USED IN THE CLIENT-SERVER MODEL USING THE DUMY JSON API
 */
export const useCategory = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getAllCategories()
			.then((res) => {
				setCategories(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return { categories };
};
