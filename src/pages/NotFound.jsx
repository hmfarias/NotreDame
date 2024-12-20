/**
 * * NotFound.jsx
 * returns 404 Not Found page with a Home Page button link
 */

import {
	Box,
	Heading,
	Text,
	Button,
	Image,
	VStack,
	HStack,
	useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import image404 from '../assets/404.png';

export const NotFound = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			textAlign="center"
			minHeight="100vh"
			bgGradient={useColorModeValue(
				'linear(to-r, blue.50, pink.50)',
				'linear(to-r, gray.900, gray.700)'
			)}
		>
			<Image
				src={image404}
				alt="404 Illustration"
				maxW="400px"
				mb={6}
				borderRadius="lg"
				boxShadow="lg"
			/>
			<VStack spacing={4}>
				<Heading
					as="h1"
					size="2xl"
					bgGradient="linear(to-r, teal.400, purple.500)"
					backgroundClip="text"
				>
					Oops! Page not found.
				</Heading>
				<Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
					It seems that you missed! Don't worry, there is always something interesting to
					discover.
				</Text>
			</VStack>
			<HStack mt={8} spacing={4}>
				<Link to="/">
					<Button
						boxShadow="lg"
						bg="gray.600" // Dark gray background
						color="white" // White text
						variant="solid"
						mt={6}
						_hover={{ bg: 'gray.500' }} // Lighter color when the cursor passes
					>
						Go Home
					</Button>
				</Link>
			</HStack>
		</Box>
	);
};
