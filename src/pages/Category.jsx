/**
 * * Category.jsx
 * Implements and returns to the home page:
 *  - a spinner component called Loader, while cards with the products from the specific category are being loaded ;
 *  or
 *  - all complete cards product for the specific category.
 */

import { useItemsByCategory } from '../hooks';
import { ItemListContainer, Loader } from '../components';
import { useParams } from 'react-router';

export const Category = () => {
	const { id } = useParams();

	const { itemsData, loading } = useItemsByCategory(id, 'products');

	return loading ? <Loader /> : <ItemListContainer products={itemsData} />;
};
