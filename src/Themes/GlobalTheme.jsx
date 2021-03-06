import { Box, Button, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const primary = '#E9E4E5';
export const secondary = '#E06161';
export const tertiary = '#F8BC61';
export const complementary1 = '#FFF';
export const complementary2 = '#001E1D';
export const complementary3 = '#7B8284';
export const textPrimary = '#000000';
export const textSecondary = '#7B8284';

export const Theme = createTheme({
	palette: {
		primary: {
			main: '#E9E4E5',
		},
		secondary: {
			main: '#BF4242',
		},
		tertiary: {
			main: '#F8BC61',
		},
		complementary1: {
			main: '#fff',
		},
		complementary2: {
			main: '#000000',
		},
		complementary3: {
			main: '#7B8284',
		},
		text: {
			primary: '#000',
			secondary: '#666',
		},
	},
	typography: {
		fontFamily: "'Inter', sans-serif",
		// fontFamily: 'sans-serif',
		h2: {
			fontSize: '47px',
			fontWeight: 500,
			lineHeight: '47px',
		},
		h3: {
			fontSize: '33px',
			lineHeight: '33px',
			fontWeight: 500,
			letterSpacing: '0.25px',
		},
		h4: {
			fontSize: '19px',
			lineHeight: '19px',
			fontWeight: 500,
			letterSpacing: '0.15px',
		},
		body1: {
			fontSize: 16,
			lineHeight: '16px',
			fontWeight: 'normal',
			letterSpacing: '0.5px',
		},
		body2: {
			fontSize: 14,
			lineHeight: '19px',
			fontWeight: 'normal',
			letterSpacing: '0.25px',
		},
		button: {
			fontSize: '14px',
			fontWeight: 500,
			lineHeight: '14px',
			letterSpacing: '1.25px',
		},
	},
});

export function Clear() {
	return <Box sx={{ clear: 'both' }}></Box>;
}
export const GlobalButton = styled(Button)({
	padding: '9px 16px',
});

export const GlobalLink = styled(Link)({
	textDecoration: 'none',
	color: 'unset',
});
