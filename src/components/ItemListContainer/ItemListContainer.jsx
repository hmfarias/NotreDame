import {
	Flex,
	Center,
	Circle,
	Box,
	Image,
	Badge,
	useColorModeValue,
	Icon,
	chakra,
	Tooltip,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const Rating = ({ rating, numReviews }) => {
	return (
		<Box display="flex" alignItems="center">
			{Array(5)
				.fill('')
				.map((_, i) => {
					const roundedRating = Math.round(rating * 2) / 2;
					if (roundedRating - i >= 1) {
						return (
							<BsStarFill
								key={i}
								style={{ marginLeft: '1' }}
								color={i < rating ? 'teal.500' : 'gray.300'}
							/>
						);
					}
					if (roundedRating - i === 0.5) {
						return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
					}
					return <BsStar key={i} style={{ marginLeft: '1' }} />;
				})}
			<Box as="span" ml="2" color="gray.500" fontSize="sm">
				{numReviews} review{numReviews > 1 && 's'}
			</Box>
		</Box>
	);
};

const Item = ({ item }) => {
	return (
		<Center py={6}>
			<Box
				bg={useColorModeValue('white', 'gray.800')}
				maxW="350px" // ancho máximo para las cards
				w="xs" // todas las cards tendrán el mismo ancho
				h="600px" // altura constante para las cards
				borderWidth="1px"
				rounded="lg"
				shadow="lg"
				position="relative"
				m={4} // Espaciado entre los productos
				overflow="hidden" // Asegura que la imagen no sobresalga del contenedor
			>
				{item.isNew && (
					<Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
				)}

				<Image
					src={item.thumbnail}
					alt={`Picture of ${item.title}`}
					boxSize="500px" // fijo el tamaño de la imagen para que no importe si son diferentes
					objectFit="cover" // La imagen se ajustará para llenar el espacio sin distorsionarse
					roundedTop="lg"
					w="100%" // La imagen ocupa todo el ancho de la card
					h="60%" // La imagen ocupa la mitad superior de la card
				/>

				<Box p="6" h="50%">
					{' '}
					{/* El contenido ocupa la otra mitad */}
					<Box display="flex" alignItems="baseline">
						{item.isNew && (
							<Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
								New
							</Badge>
						)}
					</Box>
					<Flex mt="1" justifyContent="space-between" alignContent="center">
						<Box>
							<Box
								fontSize="xl"
								fontWeight="semibold"
								as="h4"
								lineHeight="tight"
								// isTruncated
							>
								{item.title}
							</Box>
							<Box fontSize="sm" noOfLines={2}>
								{' '}
								{/* Limitamos la descripción a 2 líneas */}
								{item.description}
							</Box>
						</Box>

						<Tooltip
							label="Add to cart"
							bg="white"
							placement={'top'}
							color={'gray.800'}
							fontSize={'1.2em'}
						>
							<chakra.a href={'#'} display={'flex'}>
								<Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
							</chakra.a>
						</Tooltip>
					</Flex>
					<Flex justifyContent="space-between" alignContent="center" mt={3}>
						<Rating rating={item.rating} numReviews={item.reviews.length} />
						<Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
							<Box as="span" color={'gray.600'} fontSize="lg">
								$
							</Box>
							{item.price}
						</Box>
					</Flex>
				</Box>
			</Box>
		</Center>
	);
};

export const ItemListContainer = ({ products }) => {
	return (
		<Flex p={50} w="full" alignItems="center" justifyContent="center" wrap="wrap">
			{products.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</Flex>
	);
};
