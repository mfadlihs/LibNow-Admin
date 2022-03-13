import { ClearOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';

export function HeadingModal({ handleClose }) {
	return (
		<Container>
			<Typography>Tambah buku</Typography>
			<IconButton onClick={handleClose}>
				<ClearOutlined fontSize='small' />
			</IconButton>
		</Container>
	);
}

const Container = styled(Box)({
	padding: '10px 16px',
	display: 'flex',
	alignItems: 'center',
	backgroundColor: '#fff',
	justifyContent: 'space-between',
	borderBottom: '1px solid #000',
});
