/** PRODUCTS SERVICE
 * *products.service.js
 * Implement and return all calls, related to products:
 * * All products
 * * A product by ID
 * * All product categories
 * * All products in a category
 * ONLY USED IN THE CLIENT-SERVER MODEL USING THE DUMY JSON API
 */

import axios from 'axios';

('https://dummyjson.com/products?limit=10&skip=10&select=title,price');

const endpoint = 'https://dummyjson.com/products';
const limit = 30; // 30 is the default value and is the Quantity of products to be brought by the query- This can be changed by modifying this constant

// Bring all products from API
export const getAllProducts = async () => {
	return await axios.get(`${endpoint}?${limit}`);
};

// Bring products by ID from API
export const getProductById = async (productId) => {
	return await axios.get(`${endpoint}/${productId}`);
};

// Bring all categories from API
export const getAllCategories = async () => {
	return await axios.get(`${endpoint}/categories`);
};

// Bring products by category ID from API
export const getProductsByCategory = async (categoryId) => {
	return await axios.get(`${endpoint}/category/${categoryId}`);
};
