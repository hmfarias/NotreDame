const ItemListContainer = ({ greetings }) => {
	return (
		<div
			style={{
				fontSize: '2rem',
				fontWeight: 'bold',
				height: '70vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{greetings}
		</div>
	);
};

export default ItemListContainer;
