import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { primary } from '../Themes/GlobalTheme';

export const Container = styled(Box)({
	minHeight: '100vh',
	backgroundColor: primary,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	paddingTop: 100,
	paddingBottom: 100,
});
