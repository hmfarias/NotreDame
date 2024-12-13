/**
 * * ItemDetailContainer.jsx
 * returns a container with the complete data of the selected product
 * Params:
 * 	- item: It is the object that contains the data of the selected product
 */

import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	Image,
	Flex,
	VStack,
	Button,
	Heading,
	SimpleGrid,
	StackDivider,
	useColorModeValue,
	Divider,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import { PropTypes } from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { CartContex } from '../../context';

export const ItemDetailContainer = ({ item }) => {
	//Receives from the ‘CartContext’ context, the value of the shopping cart counter and the updating function of that state.
	const { cartState, addItem, removeItem } = useContext(CartContex);

	//Local states are defined
	const [count, setCount] = useState(0);

	const handleAddItem = () => {
		const newCount = count + 1;
		setCount(newCount);
		addItem(item, newCount);
	};

	const handleRemoveItem = () => {
		if (count > 0) {
			setCount(count - 1);
			removeItem(item);
		} else {
			setCount(0);
		}
	};

	useEffect(() => {
		//First check if the product already has something in the shopping cart.
		//This is done only the first time - that's why use useeeffffect
		const existingProduct = cartState.find((it) => it.id === item.id);
		if (existingProduct) {
			//If the product is already in the cart, update the product counter
			setCount(existingProduct.qtyItem);
		}
	}, []);

	return (
		<Container maxW={'7xl'}>
			<SimpleGrid
				columns={{ base: 1, lg: 2 }}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 18, md: 24 }}
			>
				<Flex>
					<Image
						rounded={'md'}
						alt={'product image'}
						src={item.thumbnail}
						fit={'cover'}
						align={'center'}
						w={'100%'}
						h={{ base: '100%' }}
					/>
				</Flex>
				<Stack spacing={{ base: 6, md: 10 }}>
					<Box as={'header'}>
						<Heading
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
						>
							{item.title}
						</Heading>
						<Text
							color={useColorModeValue('gray.900', 'gray.400')}
							fontWeight={300}
							fontSize={'2xl'}
						>
							${item.price} USD
						</Text>
					</Box>

					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={'column'}
						divider={
							<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
						}
					>
						<VStack spacing={{ base: 4, sm: 6 }}>
							<Text fontSize={'lg'}>{item.description}</Text>
						</VStack>
					</Stack>

					<Flex justifyContent={'space-between'} width={'30%'} alignItems={'center'}>
						<Button
							onClick={handleRemoveItem}
							bg={useColorModeValue('gray.900', 'gray.50')}
							color={useColorModeValue('white', 'gray.900')}
							_hover={{
								transform: 'translateY(4px)',
								boxShadow: 'lg',
							}}
						>
							-
						</Button>{' '}
						<Text>{count}</Text>
						<Button
							onClick={handleAddItem}
							bg={useColorModeValue('gray.900', 'gray.50')}
							color={useColorModeValue('white', 'gray.900')}
							_hover={{
								transform: 'translateY(4px)',
								boxShadow: 'lg',
							}}
						>
							+
						</Button>
					</Flex>
					<Divider />

					<Stack direction="row" alignItems="center" justifyContent={'center'}>
						<MdLocalShipping />
						<Text>2-3 business days delivery</Text>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Container>
	);
};

ItemDetailContainer.propTypes = {
	item: PropTypes.object.isRequired,
};
