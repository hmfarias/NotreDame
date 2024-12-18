import { Flex } from '@chakra-ui/react';
import { Item } from '../Item';
import { PropTypes } from 'prop-types';

/**
 * @description Implements and returns all items corresponding to the products collection
 * @param products it's an object that contains all the products brought from the Firestore
 */
export const ItemListContainer = ({ products }) => {
	// To see all the existing categories among the products migrated to firebase
	// All existing categories are stored in an array.
	//const categories = products.map((product) => product.category);
	// They are all passed to a ‘Set’ which is a data structure that does not allow duplicates.
	//const uniqueCategories = [...new Set(categories)];
	// The Set is displayed by console
	//console.log(uniqueCategories);

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

ItemListContainer.propTypes = {
	products: PropTypes.array.isRequired,
};
