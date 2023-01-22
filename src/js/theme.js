import { createTheme } from '@mui/material/styles';

export const currTheme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#008ECC',
		},
		secondary: {
			main: '#fbfbfb',
		}
	},
	typography: {
		fontFamily: 'Archivo, Open Sans',
		h1: {
			fontFamily: 'Archivo',
		},
		h2: {
			fontFamily: 'Archivo',
		},
		h3: {
			fontFamily: 'Archivo',
		},
		h4: {
			fontFamily: 'Archivo',
		},
		h5: {
			fontFamily: 'Archivo',
		},
		h6: {
			fontFamily: 'Archivo',
		},
		subtitle1: {
			fontFamily: 'Open Sans',
		},
		subtitle2: {
			fontFamily: 'Open Sans',
		},
		body2: {
			fontFamily: 'Open Sans',
		},
		caption: {
			fontFamily: 'Open Sans',
		},
		overline: {
			fontFamily: 'Open Sans',
		},
	},
});