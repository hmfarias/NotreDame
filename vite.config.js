import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// La siguiente función queda comentada porque se agrega una modificación para compatibilidad con GitHub Pages
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

//Para compatibilidad con la configuración de GitHub Pages, modifico la funcion defineConfig() que debe quedar de la siguiente manera:
// https://vitejs.dev/config/
export default defineConfig({
	base: '/NotreDame',
	plugins: [react()],
});
