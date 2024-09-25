import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from '../pages';

export const MainRouter = () => {
	//Route utiliza HOC (Higer Order Component)
	// Una ruta se compone de:
	//		1- dirección hacia donde hay que ir "path"
	//			"/": significa que es el home o página principal
	//
	//		2- qué componente se va a renderizar en ese destino "element"
	return (
		<Router>
			<Routes>
				<Route path="/NotreDameJoyas" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};
