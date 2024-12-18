import React, { useContext, useState } from 'react';
import { Flex, Button, Input, Heading, useToast } from '@chakra-ui/react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { CartContex } from '../context';

export const Payment = () => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const { cartState } = useContext(CartContex);

	const toast = useToast();

	const handleCreateOrder = () => {
		if (name === '' || lastName === '' || email === '') {
			toast({
				title: 'Missing data!',
				description: 'You must add all the required fields.',
				status: 'error',
				duration: 10000, // Visible for 10 seconds
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
		addDoc(ordersCollection, orderObj).then(({ id }) => {
			toast({
				title: 'Order Created Successfully!',
				description: `Your order ID is: ${id}. Please save it for future reference.`,
				status: 'success',
				duration: 5000, // Toast visible for 5 seconds
				isClosable: true,
				position: 'top-right',
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
