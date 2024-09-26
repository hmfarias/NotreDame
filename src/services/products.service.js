import axios from 'axios';

// Bring all products from API
export async function getAllProducts() {
	return await axios.get('https://dummyjson.com/products');
}

// Bring products by ID from API
export async function getProductById(id) {
	return await axios.get(`https://dummyjson.com/products/${id}`);
}

// Bring all categories from API
export async function getAllCategories() {
	return await axios.get('https://dummyjson.com/products/categories');
}

// Bring category by ID from API
export async function getProductsByCategory(categoryId) {
	return await axios.get(`https://dummyjson.com/products/category/${categoryId}`);
}
