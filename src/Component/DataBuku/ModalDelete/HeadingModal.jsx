import { WarningOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export function HeadingModal() {
	return (
		<Container>
			<WarningOutlined color='secondary' />
			<Typography color='secondary'>Hapus Buku?</Typography>
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
