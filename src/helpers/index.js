/**
 * *createProductsFirestore(collectionName)
 * It is a helper that allows an initial migration by creating collections in fire base.
 * @param {*} collectionName is the name of the Firebase collection to be initialised
 */

import { getAllProducts } from '../services';

import { db } from './../firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function createProductsFirestore(collectionName) {
	try {
		// 1. Get the API products
		const response = await getAllProducts();
		const fetchedProducts = response.data.products;

		if (!Array.isArray(fetchedProducts)) {
			throw new Error('The API response is not an array.');
		}

		// 2. Reference to the collection in Firestore
		const productsCollection = collection(db, collectionName);

		// 3. Add the new products to Firestore
		const addPromises = fetchedProducts.map((product) => {
			delete product.id;
			addDoc(productsCollection, {
				...product,
				createdAt: new Date(),
			});
		});

		await Promise.all(addPromises);

		console.log(`${fetchedProducts.length} products added to Firestore.`);
	} catch (err) {
		console.error('Error obtaining or storing products:', err);
	}
}
