import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { ImageBook } from './ImageBook';
import { UploadImage } from './UploadImage';
import { GlobalButton } from '../../../Themes/GlobalTheme';

export function Side() {
	return (
		<Container>
			<UploadImage />
			<GlobalButton variant='contained' color='tertiary'>
				Tambah
			</GlobalButton>
		</Container>
	);
}

const Container = styled(Box)({
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	width: 'max-content',
	alignItems: 'center',
});
