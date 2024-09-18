/** CUSTOM HOOK
 * *useItems()
 * Implements and returns a data array "productsData[]", obtained through the "getAllProducts()" function (it's a promise)
 * It also implements and returns the Boolean variable "loading", which remains in "True" state until the promise getallproducts() has been completed and the data from the API has been obtained.
 */

import { useEffect, useState } from 'react';
import { getAllProducts } from '../services';

export const useItems = () => {
	const [productsData, setProductsData] = useState([]);
	const [loading, setLoading] = useState(true);

	// useEffect() -> Hook that serves to execute actions ensuring that the component is already rendering
	// Then avoid that if for some reason the API takes too long to respond, an error occurs.
	useEffect(() => {
		getAllProducts()
			.then((res) => {
				setProductsData(res.data.products);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => setLoading(false));
	}, []);

	return { productsData, loading };
};
