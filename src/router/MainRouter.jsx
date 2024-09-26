import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Category, Home, ItemDetail, NotFound } from '../pages';

export const MainRouter = () => {
	//Route utiliza HOC (Higer Order Component)
	// Una ruta se compone de:
	//		1- dirección hacia donde hay que ir "path"
	//			"/": significa que es el home o página principal
	//
	//		2- qué componente se va a renderizar en ese destino "element"

	// Agrego "NotreDameJoyas" al path, para compatibilidad con GitHub Pages (al igual que en vite.config.js)
	return (
		<Router>
			<Routes>
				<Route path="/NotreDameJoyas" element={<Home />} />
				<Route path="/NotreDameJoyas/item/:id" element={<ItemDetail />} />
				<Route path="/NotreDameJoyas/category/:id" element={<Category />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};
