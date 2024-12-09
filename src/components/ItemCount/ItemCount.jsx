/** Product Item
 * * ItemCount.jsx
 * Implements a counter
 */

import { useEffect, useState } from 'react';
import { Button, Text, Box } from '@chakra-ui/react';

export const ItemCount = () => {
	const [count, SetCount] = useState(0);

	const handleAdd = () => {
		SetCount(count + 1);
	};

	const handleRemove = () => {
		SetCount(count - 1);
	};

	//useEffect sin control: se ejecuta en el primer montaje y cada vez que cambie algo
	useEffect(() => {
		console.log('useEffect sin control');
	});

	//useEffect con dependencias vacías: se ejecuta en el primer montaje y nunca mas
	useEffect(() => {
		console.log('useEffect con dependencias vacias');
	}, []);

	//useEffect con dependencia: se ejecuta en el primer montaje y cada vez que cambie lo que se ponga dentro del array de dependencias
	useEffect(() => {
		console.log('useEffect con dependencia');
	}, [count]);

	return (
		<Box>
			<Button onClick={handleAdd}> + </Button>
			<Text>{count}</Text>
			<Button onClick={handleRemove}> - </Button>
		</Box>
	);
};
