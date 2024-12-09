/**
 * * Home.jsx
 * Implements and returns to the home page:
 *  - a spinner component called Loader, while cards with all products are being loaded ;
 *  or
 *  - all complete cards product.
 */

import { ItemListContainer, Loader } from '../components';
import { useItems } from '../hooks';

export const Home = () => {
	const { productsData, loading } = useItems();

	return loading ? <Loader /> : <ItemListContainer products={productsData} />;
};
