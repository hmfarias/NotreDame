// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
	return (
		<ChakraProvider>
			<NavBar />
			<ItemListContainer greetings="Bienvenidos a Notre Dame Joyas" />
		</ChakraProvider>
	);
};

export default App;
