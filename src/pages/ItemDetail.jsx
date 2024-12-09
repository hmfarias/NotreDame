/**
 * * ItemDetail.jsx
 * Implements and returns:
 *  - a spinner component called Loader, While the detail of the selected product is being loaded ;
 *  or
 *  - all complete detail for the product selected.
 */

import { useParams } from 'react-router';

import { useItemById } from '../hooks';

import { ItemDetailContainer, Loader } from '../components';

export const ItemDetail = () => {
	const { id } = useParams();

	const { product, loading } = useItemById(id);

	return loading ? <Loader /> : <ItemDetailContainer item={product} />;
};
