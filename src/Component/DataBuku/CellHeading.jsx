import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { primary } from '../../Themes/GlobalTheme';

export function CellHeading({ children }) {
	return (
		<CellHeadingContainer>
			<Typography textAlign='center' variant='h4'>
				{children}
			</Typography>
		</CellHeadingContainer>
	);
}
const CellHeadingContainer = styled(Box)({
	padding: '16px 0',
	backgroundColor: primary,
	userSelect: 'none',
});
