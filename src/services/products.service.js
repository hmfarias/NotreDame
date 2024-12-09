/** PRODUCTS SERVICE
 * *products.service.js
 * Implement and return all calls, related to products:
 * * All products
 * * A product by ID
 * * All product categories
 * * All products in a category
 */

import axios from 'axios';

const endpoint = 'https://dummyjson.com/products';

// Bring all products from API
export const getAllProducts = async () => {
	return await axios.get(`${endpoint}`);
};

// Bring products by ID from API
export const getProductById = async (id) => {
	return await axios.get(`${endpoint}/${id}`);
};

// Bring all categories from API
export const getAllCategories = async () => {
	return await axios.get(`${endpoint}/categories`);
};

// Bring products by category ID from API
export const getProductsByCategory = async (categoryId) => {
	return await axios.get(`${endpoint}/category/${categoryId}`);
};
