import { NavBar } from '../components';
import { Box } from '@chakra-ui/react';

export const MainLayout = ({ children }) => {
	return (
		<Box>
			{children}
			<footer>Este es mi footer</footer>
		</Box>
	);
};
