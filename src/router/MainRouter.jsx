/**
 * * MainRouter.jsx
 * 	<Route/> uses HOC (Higer Order Component). It recibes a commponent as parameter.
 *	A route consists of:
 *			1- address where you have to go "path"
 *				"/": means that is the home or main page
 *			2- What component will be rendered to that destination "element" (This is the commponent passed as parameter)
 *
 *	Important clarification: GH-Pages was installed to be able to make the deploy in git pages.
 *  Then I add "NotreDameJoyas" to all Paths, for compatibility with the configuration of Github Pages (as in Vite.config.js)
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Category, Checkout, Home, ItemDetail, NotFound, Payment } from '../pages';
import { NavBar } from '../components';

export const MainRouter = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/NotreDameJoyas/" element={<Home />} />
				<Route path="/NotreDameJoyas/item/:id" element={<ItemDetail />} />
				<Route path="/NotreDameJoyas/category/:id" element={<Category />} />
				<Route path="/NotreDameJoyas/checkout" element={<Checkout />} />
				<Route path="/NotreDameJoyas/payment" element={<Payment />} />

				{/* For errors pages */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};
