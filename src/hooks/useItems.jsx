import { useEffect, useState } from 'react';
// import { getAllProducts } from '../services'; //CLIENT SERVER MODEL using the API

//WITH FIRESTORE
import { collection, getDocs } from 'firebase/firestore'; //WITH FIRESTORE
import { db } from '../firebase';

/**
 * @description Custom Hook that returns a objects array "itemsData[]", obtained from Firebase according to the collection received as parameter.
 * It also implements and returns the Boolean variable "loading", which remains in "True" state until the promise getDocs() has been completed and the data has been obtained.
 * @param {*} collectionName is the name of the FIRESTORE collection from which the data will be fetched.
 * @returns
 */
export const useItems = (collectionName) => {
	const [itemsData, setItemsData] = useState([]);
	const [loading, setLoading] = useState(true);

	// useEffect() -> Hook that serves to execute actions ensuring that the component is already rendered
	// Then avoid that if for some reason the API takes too long to respond, an error occurs.
	// useEffect() without denendencies implies that whatever within the useEffect() will be executed the first time the component is mount
	useEffect(() => {
		//CLIENT SERVER MODEL using the API
		// getAllProducts()
		// 	.then((res) => {
		// 		setProductsData(res.data.products);
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	})
		// 	.finally(() => setLoading(false));

		//WITH FIRESTORE
		//1 - the collection is identified and configured
		const itemsCollection = collection(db, collectionName);

		//2- documents are obtained and the status of productsData is updated
		getDocs(itemsCollection)
			.then((snapshot) => {
				setItemsData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => setLoading(false));
	}, []);

	return { itemsData, loading };
};
