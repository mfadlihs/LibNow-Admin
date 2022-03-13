import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { primary } from '../../Themes/GlobalTheme';

export const DashboardSection = styled(Box)(props => ({
	padding: '18px 15px',
	display: 'flex',
	alignItems: 'center',
	gap: '18px',
	userSelect: 'none',
	backgroundColor: props.active && primary,
	'&:hover': {
		cursor: 'pointer',
		backgroundColor: !props.active && `${primary}90`,
	},
}));
