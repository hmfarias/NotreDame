import { useEffect, useState } from 'react';
// import { getProductById } from '../services'; //CLIENT SERVER MODEL USING THE API

//WITH FIRESTORE
// import doc instead of collection and getDoc instead of getDocs, because only one document is consulted.
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * @description Custom Hook that returns an object that corresponds to the complete data of the product that was used as argument in the call
 * @param {*} id It's the ID that identifies the product to be brought
 */
export const useItemById = (id) => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		//CLIENT SERVER MODEL USING THE API
		// getProductById(id)
		// 	.then((res) => {
		// 		setProduct(res.data);
		// 	})
		// 	.catch((error) => console.log(error))
		// 	.finally(() => setLoading(false));

		//WITH FIRESTORE
		const itemCollection = doc(db, 'products', id);
		getDoc(itemCollection)
			.then((snapshot) => {
				setProduct({ id: snapshot.id, ...snapshot.data() });
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	return { product, loading };
};
