/** CUSTOM HOOK
 * *useItemsById()
 * Implements and returns an object that corresponds to the data of the product that was used as argument in the call
 * Params:
 * 	id: It's the ID that identifies the product to be brought from the API
 */

import React, { useEffect, useState } from 'react';
import { getProductById } from '../services';

export const useItemById = (id) => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProductById(id)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	return { product, loading };
};
