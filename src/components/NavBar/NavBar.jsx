/**
 * Navbar.jsx
 * Impletements and return the navbar for the page
 */

import {
	Box,
	Flex,
	Avatar,
	Button,
	Image,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { CartWidget } from '../CartWidget';
import { useItems } from '../../hooks';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';

//For migration to Firebase from the Dumy Json api
// import { createProductsFirestore } from '../../helpers';

export const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const { itemsData } = useItems('categories');

	return (
		<>
			<Box bg={useColorModeValue('gray.500', 'gray.700')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Link to={`/NotreDame/`}>
						<Image src={logo} objectFit="cover" h="70px" w="auto" alt={'Logo Image'} />
					</Link>
					<Menu>
						<MenuButton as={Button} cursor="pointer" style={{ marginLeft: 30 }}>
							Categories
						</MenuButton>
						<MenuList height={'fit-content'} overflowY={'scroll'}>
							{/* add the home option in the menu */}
							<MenuItem key={'home'}>
								<Link to={`/NotreDame/`}>{'All products'}</Link>
							</MenuItem>
							{/* add the rest of categories */}
							{itemsData.map((category) => (
								<MenuItem key={category.slug}>
									<Link to={`/NotreDame/category/${category.slug}`}>{category.name}</Link>
								</MenuItem>
							))}
						</MenuList>
					</Menu>
					{/* For migration to Firebase from the Dumy Json api */}
					{/* <Button onClick={() => {createProductsFirestore('products');}}>
						Create Products
					</Button> */}
					<Flex alignItems={'center'}>
						<CartWidget />
						<Stack direction={'row'} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>

							<Menu>
								<MenuButton
									as={Button}
									rounded={'full'}
									variant={'link'}
									cursor={'pointer'}
									minW={0}
								>
									<Avatar
										size={'sm'}
										src={'https://avatars.dicebear.com/api/male/username.svg'}
									/>
								</MenuButton>
								<MenuList
									alignItems={'center'}
									bg={useColorModeValue('gray.500', 'gray.700')}
								>
									<br />
									<Center>
										<Avatar
											size={'2xl'}
											src={'https://avatars.dicebear.com/api/male/username.svg'}
										/>
									</Center>
									<br />
									<Center>
										<p>Username</p>
									</Center>
									<br />
									<MenuDivider />
									<MenuItem bg={useColorModeValue('gray.500', 'gray.700')}>
										Your Servers
									</MenuItem>
									<MenuItem bg={useColorModeValue('gray.500', 'gray.700')}>
										Account Settings
									</MenuItem>
									<MenuItem bg={useColorModeValue('gray.500', 'gray.700')}>
										Logout
									</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};
