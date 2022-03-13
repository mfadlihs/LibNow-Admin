import { HelpCenter } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export function HeadingModal() {
	return (
		<Container>
			<HelpCenter color='secondary' />
			<Typography color='secondary'>Konfirmasi</Typography>
		</Container>
	);
}

const Container = styled(Box)({
	gap: '5px',
	padding: '10px 16px',
	display: 'flex',
	alignItems: 'center',
	backgroundColor: '#fff',
});
