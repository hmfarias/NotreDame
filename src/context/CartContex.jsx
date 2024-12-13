/**
 * *CartContext
 * Define the context for application shopping cart
 */

import { useStatStyles } from '@chakra-ui/react';
import { createContext, useState } from 'react'; //This is used to create the context

// From this, you can find the 'CartContext' and its elements at any point in the application
export const CartContex = createContext();

// Definition of PROVIDER --- (children are all consumers of this context)
export const CartProvider = ({ children }) => {
	//The shopping cart counter ("cartState") is application-wide in scope and can therefore be defined in this context
	const [cartState, setCartState] = useState([]); //cartState and its updater function are now GLOBAL

	//Definition of actions

	//addItem Receive the product and the quantity that is being added to the shopping cart
	const addItem = (product, qtyItem) => {
		//First validate if the received product already exists in the shopping cart.
		const existingProduct = cartState.find((item) => item.id === product.id);

		//If the product already exists, the product is not added but only increased in quantity.
		if (existingProduct) {
			setCartState(
				cartState.map((item) =>
					item.id === product.id ? { ...item, qtyItem: item.qtyItem + 1 } : item
				)
			);
		} else {
			//If the product doesn't exist in the shopping cart, it will only be added
			setCartState([...cartState, { ...product, qtyItem: 1 }]);
		}
	};

	//removeItem: Receive the product that is being added to the shopping cart (quantity isn't neccesary)
	const removeItem = (product) => {
		//First validate if the received product already exists in the shopping cart.
		const existingProduct = cartState.find((item) => item.id === product.id);

		//If the product already exists, its quantity is decreased by one.
		if (existingProduct) {
			// If the quantity of the product is equal to one, it will be zero when decremented by one, so it is removed from the array.
			if (existingProduct.qtyItem === 1) {
				setCartState(cartState.filter((item) => item.id != product.id));
			} else {
				// If the quantity of the product is greater than one, the quantity is only decreased by one.
				setCartState(
					cartState.map((item) =>
						item.id === product.id ? { ...item, qtyItem: item.qtyItem - 1 } : item
					)
				);
			}
		}
	};

	return (
		<CartContex.Provider
			value={{
				// here are passed the elements that will be global for all 'children' (see App.jsx)
				cartState,
				setCartState,
				addItem,
				removeItem,
			}}
		>
			{children}
		</CartContex.Provider>
	);
};
