import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { GlobalButton } from '../../Themes/GlobalTheme';

export function CardButton({ handleOpen }) {
	return (
		<CardButtonContainer>
			<GlobalButton variant='outlined' sx={{ color: '#000' }} color='tertiary'>
				Lihat Peminjam
			</GlobalButton>
			<GlobalButton onClick={handleOpen} variant='contained' color='tertiary'>
				Konfirmasi
			</GlobalButton>
		</CardButtonContainer>
	);
}

const CardButtonContainer = styled(Box)({
	display: 'flex',
	gap: 15,
});
