// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from './layouts';
import { Home } from './pages';

const App = () => {
	return (
		<ChakraProvider>
			<MainLayout>
				<Home />
			</MainLayout>
		</ChakraProvider>
	);
};

export default App;
