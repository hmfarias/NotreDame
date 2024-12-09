/**
 * * MainLayout.jsx
 * Returns the main layout (or default layout) for the page
 */

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
