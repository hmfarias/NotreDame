import { useState, useEffect } from 'react';
//import { getProductsByCategory } from '../services';  //CLIENT SERVER MODEL using the API

//WITH FIRESTORE
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * @description Custom Hook that implements and returns an object that corresponds to the data of the product category that was used as argument in the call.
 * @param {*} id It's the Category ID that identifies the category to which the products to be brought must belong
 * id must be added in the dependencies array of UseeEffec, so that it is executed again if the category is changed
 * @param {*} collectionName Identifies the name of the firestore collection, in which the category field will be compared with the parameter ‘id’
 */
export const useItemsByCategory = (id, collectionName) => {
	const [itemsData, setItemsData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		//CLIENT SERVER MODEL using the API
		// getProductsByCategory(id)
		// 	.then((res) => {
		// 		setItemsData(res.data.products);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	})
		// 	.finally(() => setLoading(false));

		//WITH FIRESTORE
		const customQuery = query(
			collection(db, collectionName),
			where('category', '==', id)
		);

		getDocs(customQuery)
			.then((snapshot) => {
				setItemsData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => setLoading(false));
	}, [id]);
	return { itemsData, loading };
};
