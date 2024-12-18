import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContex } from '../../context';
import { Link } from 'react-router-dom';

/**
 * @description Implements and returns the shopping cart icon along with the number corresponding to the total number of items in the shopping cart.
 */
export const CartWidget = () => {
	//Receives from the ‘CartContext’ context, the value of the shopping cart counter.
	const { cartState } = useContext(CartContex);

	//use reduce() to add up all product quantities and get the total of items in the shopping cart
	const totalItemsCart = cartState.reduce((sum, item) => sum + item.qtyItem, 0);

	return (
		<Link
			to="NotreDame/checkout"
			style={{
				display: 'flex',
				marginRight: '21px',
				alignItems: 'center',
				width: '30%',
				justifyContent: 'space-between',
				gap: '0.625rem',
			}}
		>
			<FaShoppingCart size={30} />
			{totalItemsCart}
		</Link>
		// </Link>
	);
};
