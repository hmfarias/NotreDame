import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = () => {
	return (
		<div
			style={{
				display: 'flex',
				marginRight: '25px',
				alignItems: 'center',
				width: '30%',
				justifyContent: 'space-between',
			}}
		>
			<FaShoppingCart size={30} />
			77
		</div>
	);
};
