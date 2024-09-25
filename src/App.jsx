import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from './layouts';
import { Home } from './pages';
import { MainRouter } from './router';

const App = () => {
	return (
		<ChakraProvider>
			<MainLayout>
				<MainRouter />
			</MainLayout>
		</ChakraProvider>
	);
};

export default App;
