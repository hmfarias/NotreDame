import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
	Image,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import logo from '../../assets/logo2.png';

/**
 * @description It is an internal function that returns the buttons corresponding to the Social Networks.
 * @param children Is the component to be placed inside the SocialButton component
 * @param label Is the ‘label’ to be assigned to the children
 * @param href Corresponds to the URL associated with the children
 */
const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

/**
 * @description Returns the footer for the page
 */
export const Footer = () => {
	return (
		<Box
			bg={useColorModeValue('gray.500', 'gray.700')}
			color={useColorModeValue('gray.700', 'gray.200')}
			h={'5rem'}
		>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				{/* <Logo /> */}
				<Image src={logo} objectFit="cover" h="50px" w="auto" alt={'Logo Image'} />

				<Text fontSize={'xx-small'}>© 2024 Digital Wizard. All rights reserved</Text>
				<Stack direction={'row'} spacing={6}>
					<SocialButton label={'Twitter'} href={'#'}>
						<FaTwitter />
					</SocialButton>
					<SocialButton label={'YouTube'} href={'#'}>
						<FaYoutube />
					</SocialButton>
					<SocialButton label={'Instagram'} href={'#'}>
						<FaInstagram />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
};
