import {
	Box,
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
	useToast,
	IconButton,
} from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { MdLocalShipping } from 'react-icons/md';
import { PropTypes } from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { CartContex } from '../../context';

/**
 * @description Is an internal component,
 * which returns a component showing the available stock of the product,
 * using conditional rendering and Chakra's dynamic styles.
 * @param {*} stock Is the amount of available stock of the product, which will be displayed with Conditional Rendering.
 */
const GetStockMessage = ({ stock }) => {
	const message =
		stock === 0
			? 'OUT OF STOCK - Soon available!'
			: stock <= 5
			? `${stock} - Last available units!`
			: stock;

	const color = stock === 0 ? 'red.500' : stock <= 5 ? 'orange.500' : 'green.500';

	const fontWeight = stock === 0 ? 'bold' : 'normal';

	const fontStyle = stock <= 5 && stock > 0 ? 'italic' : 'normal';

	return (
		<Text as="span" color={color} fontWeight={fontWeight} fontStyle={fontStyle}>
			{message}
		</Text>
	);
};

/**
 * @description returns a container with the complete data of the selected product
 * @param item Is the object that contains the data of the selected product. Uses an internal function called getStockMessage
 */
export const ItemDetailContainer = ({ item }) => {
	//Receives from the ‘CartContext’ context, the value of the shopping cart counter and the updating function of that state.
	const { cartState, addItem, removeItem } = useContext(CartContex);

	//Local states are defined
	const [count, setCount] = useState(0);
	const toast = useToast();

	const handleAddItem = () => {
		const newCount = count + 1;
		//verify that no more products can be added than the available stock.
		if (newCount <= item.stock) {
			setCount(newCount);
			addItem(item, newCount);
		} else {
			// Show warning message
			toast({
				title: 'Insufficient stock',
				description: `Not enough stock to add this product. Already added ${count} products`,
				status: 'warning',
				duration: 3500, //Duration in milliseconds
				isClosable: true,
				position: 'top-right', // Toast position
			});
		}
	};

	const handleRemoveItem = () => {
		if (count > 0) {
			setCount(count - 1);
			removeItem(item);
		} else {
			setCount(0);
			toast({
				title: 'Products removed',
				description: 'There are no products of this type in the shopping cart.',
				status: 'warning',
				duration: 3500, //Duration in milliseconds
				isClosable: true,
				position: 'top-right', // Toast position
			});
		}
	};

	useEffect(() => {
		//First check if the product already has something in the shopping cart.
		//This is done only the first time the component is renderized - that's why use useeeffffect
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

					<Flex>
						{/*using dynamic rendering chakra dynamic styles */}
						<Text>
							<Text as="span" mr={2}>
								Stock:
							</Text>
							<GetStockMessage stock={item.stock} />
						</Text>
					</Flex>

					<Flex justifyContent={'space-between'} width={'30%'} alignItems={'center'}>
						<IconButton
							aria-label="Decrease quantity"
							icon={<MinusIcon />}
							size="sm"
							onClick={handleRemoveItem}
							bg={useColorModeValue('gray.900', 'gray.50')}
							color={useColorModeValue('white', 'gray.900')}
							_hover={{
								transform: 'translateY(4px)',
								boxShadow: 'lg',
							}}
						>
							-
						</IconButton>{' '}
						<Text>{count}</Text>
						<IconButton
							ria-label="Increase quantity"
							icon={<AddIcon />}
							size="sm"
							onClick={handleAddItem}
							bg={useColorModeValue('gray.900', 'gray.50')}
							color={useColorModeValue('white', 'gray.900')}
							_hover={{
								transform: 'translateY(4px)',
								boxShadow: 'lg',
							}}
						>
							+
						</IconButton>
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
