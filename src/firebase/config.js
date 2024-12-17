// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB3lY5BVKj9cb9yyBMAE6dLuk-0_NqVEDw',
	authDomain: 'ecommerce-notre-dame.firebaseapp.com',
	projectId: 'ecommerce-notre-dame',
	storageBucket: 'ecommerce-notre-dame.firebasestorage.app',
	messagingSenderId: '735060736243',
	appId: '1:735060736243:web:7f5611483ee253fc895f86',
	measurementId: 'G-QGH0VS089N',
};

// Initialize Firebase in the app
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// The firestore configuration is exported, with the name ‘db’.
export const db = getFirestore(app);
