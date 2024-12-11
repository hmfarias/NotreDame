/** CUSTOM HOOK
 * *useItemsByCategory()
 * Implements and returns an object that corresponds to the data of the product category that was used as argument in the call
 * Params:
 * 	categoryId: It's the Category ID that identifies the category to which the products to be brought from the API must belong
 * categoryId must be added in the dependencies array of UseeEffec, so that it is executed again if the category is changed
 */

import { useState, useEffect } from 'react';
import { getProductsByCategory } from '../services';

export const useItemsByCategory = (categoryId) => {
	const [productsData, setProductsData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProductsByCategory(categoryId)
			.then((res) => {
				setProductsData(res.data.products);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => setLoading(false));
	}, [categoryId]);
	return { productsData, loading };
};
