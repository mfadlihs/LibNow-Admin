import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { GlobalButton } from '../../../Themes/GlobalTheme';
import { ImageBook } from './ImageBook';

export function UploadImage() {
	return (
		<Container width='max-content'>
			<ImageBook />
			<GlobalButton
				sx={{ marginBottom: '5px' }}
				color='complementary1'
				variant='contained'
			>
				Pilih Gambar
			</GlobalButton>
			<Typography fontSize={10} color='textSecondary' variant='body2'>
				Ukuran gambar: maks. 1MB
			</Typography>
			<Typography fontSize={10} color='textSecondary' variant='body2'>
				Format gambar: .JPEG, .PNG
			</Typography>
		</Container>
	);
}

const Container = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});
