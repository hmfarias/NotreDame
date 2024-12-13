import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from './layouts';
import { MainRouter } from './router';
import { CartProvider } from './context';

const App = () => {
	return (
		<ChakraProvider>
			<MainLayout>
				<CartProvider>
					<MainRouter />
				</CartProvider>
			</MainLayout>
		</ChakraProvider>
	);
};

export default App;
