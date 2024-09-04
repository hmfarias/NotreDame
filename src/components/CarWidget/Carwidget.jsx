import { FaShoppingCart } from 'react-icons/fa';

const CarWidget = () => {
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

export default CarWidget;
