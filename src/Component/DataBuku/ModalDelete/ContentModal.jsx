import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { GlobalButton, primary } from '../../../Themes/GlobalTheme';

export function ContentModal({ handleClose }) {
	return (
		<Container>
			<Typography textAlign='center' marginBottom='27px'>
				Anda yakin ingin menghapus Buku ini?
			</Typography>
			<ButtonContainer>
				<GlobalButton
					onClick={handleClose}
					variant='contained'
					color='complementary1'
				>
					Batal
				</GlobalButton>
				<GlobalButton variant='contained' color='tertiary'>
					Hapus
				</GlobalButton>
			</ButtonContainer>
		</Container>
	);
}

const Container = styled(Box)({
	padding: '35px 0 35px',
	backgroundColor: primary,
});

const ButtonContainer = styled(Box)({
	display: 'flex',
	justifyContent: 'space-evenly',
});
