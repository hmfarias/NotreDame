/**
 * * Checkout()
 * Displays shopping cart details
 * and allows you to proceed to payment
 */
import {
	Box,
	Heading,
	Alert,
	AlertIcon,
	VStack,
	Flex,
	Text,
	HStack,
	IconButton,
	Spacer,
	Divider,
	Button,
	Image,
	useColorModeValue,
} from '@chakra-ui/react';
import { MinusIcon, AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CartContex } from '../context';

export const Checkout = () => {
	//  All elements of the context (the shopping cart and the functions to change its state) are brought.
	const { cartState, addItem, removeItem, deleteItem } = useContext(CartContex);

	// Use ‘reduce()’ to calculate the total price of the products in the shopping cart.
	const total = cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);

	// To delete the selected item
	const handleDeleteItem = (item) => {
		deleteItem(item);
	};

	// useNavigate() allows for imperative navigation between components and route
	const navigate = useNavigate();

	// By clicking on the ‘Buy’ button, you navigate directly to the ‘/payment’ page.
	const handleNavigatePayment = () => {
		navigate('../NotreDame/payment');
	};

	return (
		<Box p={6} maxW="800px" mx="auto" h={'90vh'} bg="gray.600" color="gray.300">
			<Heading as="h2" size="lg" mb={6} textAlign="center">
				Cart Details
			</Heading>

			{cartState.length === 0 ? (
				<Alert status="info" borderRadius="md" color="black">
					<AlertIcon />
					Your cart is empty.
				</Alert>
			) : (
				<VStack spacing={4} align="stretch">
					{cartState.map((item) => (
						<Flex
							key={item.id}
							p={4}
							borderWidth="1px"
							borderRadius="md"
							alignItems="center"
							boxShadow="sm"
							bg="gray.400"
							color="gray.100"
						>
							<Image
								src={item.thumbnail}
								alt={item.title}
								boxSize="100px"
								objectFit="cover"
								borderRadius="md"
								mr={4}
							/>
							<Box flex="1">
								<Text fontSize="xl" fontWeight="bold">
									{item.title}
								</Text>
								<HStack spacing={4} mt={2}>
									<Text>Precio: ${item.price.toFixed(2)}</Text>
									<HStack>
										<IconButton
											aria-label="Decrease quantity"
											icon={<MinusIcon />}
											size="sm"
											color="gray.900"
											bg="gray.100"
											onClick={() => removeItem(item)}
											isDisabled={item.qtyItem === 1}
										/>
										<Text>{item.qtyItem}</Text>
										<IconButton
											aria-label="Increase quantity"
											icon={<AddIcon />}
											size="sm"
											color="gray.900"
											bg="gray.100"
											onClick={() => addItem(item)}
											isDisabled={item.qtyItem >= item.stock}
										/>
									</HStack>
								</HStack>
							</Box>
							<Spacer />
							<HStack>
								<Text fontWeight="bold">
									Subtotal: ${(item.price * item.qtyItem).toFixed(2)}
								</Text>
								<IconButton
									aria-label="Eliminar producto"
									icon={<DeleteIcon />}
									color="red"
									bg="gray.100"
									variant="outline"
									onClick={() => handleDeleteItem(item)}
								/>
							</HStack>
						</Flex>
					))}
					<Divider borderColor="gray.200" />
					<Flex alignItems="center">
						<Text fontSize="2xl" fontWeight="bold">
							Total: ${total.toFixed(2)}
						</Text>
						<Spacer />
					</Flex>
					<Button bg="gray.300" color="gray.900" onClick={handleNavigatePayment}>
						Buy
					</Button>
				</VStack>
			)}
		</Box>
	);
};
