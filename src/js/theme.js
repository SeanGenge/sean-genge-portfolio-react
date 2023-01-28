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
		fontFamily: 'Open Sans, Roboto',
		h1: {
			fontFamily: 'Open Sans',
		},
		h2: {
			fontFamily: 'Open Sans',
		},
		h3: {
			fontFamily: 'Open Sans',
		},
		h4: {
			fontFamily: 'Open Sans',
		},
		h5: {
			fontFamily: 'Open Sans',
		},
		h6: {
			fontFamily: 'Open Sans',
		},
		subtitle1: {
			fontFamily: 'Roboto',
		},
		subtitle2: {
			fontFamily: 'Roboto',
		},
		body2: {
			fontFamily: 'Roboto',
		},
		caption: {
			fontFamily: 'Roboto',
		},
		overline: {
			fontFamily: 'Roboto',
		},
	},
});