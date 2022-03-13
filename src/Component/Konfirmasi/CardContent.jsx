import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export function CardContent() {
	return (
		<CardContentContainer>
			<Typography variant='h3'>Good Habits, Bad Habits</Typography>
			<Typography color='textSecondary'>Wendy Wood</Typography>
			<Typography variant='body2'>Konfirmasi sebelum 12.30 WIB</Typography>
		</CardContentContainer>
	);
}

const CardContentContainer = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
	height: '100%',
});
