/**
 * * Payment()
 *  Displays the form with the buyer's details and allows the order to be generated.
 */

import React, { useContext, useState } from 'react';
import { Flex, Button, Input, Heading, useToast, Box, Text } from '@chakra-ui/react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { CartContex } from '../context';
import { useNavigate } from 'react-router';

export const Payment = () => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const { cartState, setCartState } = useContext(CartContex);

	const toast = useToast();
	const toastIdRef = React.useRef(); // to identify a toast and to be able to close it when needed

	// useNavigate() allows for imperative navigation between components and route
	const navigate = useNavigate();

	const handleCreateOrder = () => {
		if (name === '' || lastName === '' || email === '') {
			toast({
				title: 'Missing data!',
				description: 'You must add all the required fields.',
				status: 'error',
				duration: 5000, // Visible for 5 seconds
				isClosable: true,
				position: 'top-right', // Toast appears in the top-right corner
			});

			return;
		}

		const total = cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);

		//The object is created with the data I want the order to have.
		const orderObj = {
			buyer: {
				name,
				lastName,
				email,
			},
			// Only the fields of interest for the order are retrieved from ‘cartState’.
			items: cartState.map((item) => {
				return {
					id: item.id,
					title: item.title,
					price: item.price,
					qty: item.qtyItem,
				};
			}),
			total,
		};

		const ordersCollection = collection(db, 'orders');

		// Toast while the order is being created
		toastIdRef.current = toast({
			title: 'Creating the order ...',
			status: 'loading',
			isClosable: true,
			position: 'top-right',
		});

		// Attempt to save the order
		addDoc(ordersCollection, orderObj)
			.then(({ id }) => {
				// success in saving the order

				// the toast with the message: ‘Creating the order...’, closes
				if (toastIdRef.current) {
					toast.close(toastIdRef.current);
				}

				// Succes toast
				toast({
					position: 'top-right',
					isClosable: true,
					duration: null, // No time to close automatically
					render: ({ onClose }) => (
						<Box
							bg="green.500"
							color="white"
							p={5}
							borderRadius="md"
							textAlign="center"
							boxShadow="md"
						>
							<Text fontWeight="bold" fontSize="lg" mb={3}>
								Order Created Successfully!
							</Text>
							<Text textAlign="justify" mb={4}>
								Your Order ID is: <strong>{id}</strong>. Save it for future reference.
							</Text>
							<Button
								colorScheme="blue"
								onClick={() => {
									// Shopping cart is emptied
									setCartState([]);

									// Navigate to the home page
									navigate('../NotreDame');

									// the toast closes
									onClose();
								}}
							>
								Close
							</Button>
						</Box>
					),
				});
			})
			.catch((error) => {
				// error when saving the order
				console.log(error);

				// the toast with the message: ‘Creating the order...’, closes
				if (toastIdRef.current) {
					toast.close(toastIdRef.current);
				}
				toast({
					title: 'Error',
					description: 'There was a problem creating your order. Please try again.',
					status: 'error',
					position: 'top-right',
					duration: 5000,
					isClosable: true,
				});
			});
	};

	return (
		<Flex
			w={'100vw'}
			h={'60vh'}
			alignItems={'center'}
			justifyContent={'center'}
			flexDirection={'column'}
		>
			<Heading>Create order</Heading>
			<Flex
				flexDirection={'column'}
				w={'50vw'}
				h={'20vh'}
				justifyContent={'space-between'}
			>
				<Input
					type="text"
					placeholder="Name (*)"
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					type="text"
					placeholder="Surname (*)"
					onChange={(e) => setLastName(e.target.value)}
				/>
				<Input
					type="email"
					placeholder="e-mail (*)"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Button colorScheme="teal" size="lg" onClick={handleCreateOrder}>
					Crear Orden
				</Button>
			</Flex>
		</Flex>
	);
};
