/**
 * * ItemListContainer.jsx()
 * Implements and returns all items corresponding to the products
 * Params:
 * 	products: it's an object that contains all the products brought from the API
 */

import { Flex } from '@chakra-ui/react';
import { Item } from '../Item';

export const ItemListContainer = ({ products }) => {
	return (
		<Flex
			wrap="wrap" // To allow the elements to wrap in several rows
			justifyContent="center" // Centers horizontally the elements
			alignItems="flex-start" //Align the elements from the top
			minHeight="100vh" // Ensures that the container occupies at least 100% of the screen height
		>
			{products.map((item) => {
				return <Item key={item.id} item={item} />;
			})}
		</Flex>
	);
};
