import { Flex, Spinner } from '@chakra-ui/react';

/**
 * @description Impletements and return a spinner shown on the screen while a process is being carried out such as the product load
 */
export const Loader = () => {
	return (
		<Flex height={'90vh'} width={'100vw'} alignItems={'center'} justifyContent={'center'}>
			<Spinner
				thickness="4px"
				speed="0.65s"
				emptyColor="gray.200"
				color="blue.500"
				size="xl"
			/>
		</Flex>
	);
};
