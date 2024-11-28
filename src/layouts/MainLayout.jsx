import { Box } from '@chakra-ui/react';
import { Footer } from '../components';

export const MainLayout = ({ children }) => {
	return (
		<>
			<Box>{children}</Box>
			<Footer />
		</>
	);
};
