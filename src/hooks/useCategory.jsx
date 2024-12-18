/** CUSTOM HOOK
 * *useCategory()
 * Implements and returns an object that corresponds to the data of all categories of product
 * ONLY USED IN THE CLIENT-SERVER MODEL USING THE DUMY JSON API
 */

import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../services';

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
