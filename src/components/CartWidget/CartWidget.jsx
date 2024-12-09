/**
 * * CartWidget.jsx
 *Implements and return the shopping cart icon
 *together with the number corresponding to the total items inside the shopping cart
 */

import { Box } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = () => {
	return (
		<Box
			style={{
				display: 'flex',
				marginRight: '5px',
				alignItems: 'center',
				width: '30%',
				justifyContent: 'space-between',
			}}
		>
			<FaShoppingCart size={30} />
			77
		</Box>
	);
};
