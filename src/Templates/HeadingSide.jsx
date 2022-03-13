import { ArrowDropDownTwoTone } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { LibraryIcon } from '../Component/Home/LibraryIcon';

export function HeadingSide() {
	return (
		<Container>
			<LibraryIcon marginBottom='20px' />
			<Typography variant='h4' gutterBottom>
				Perpustakaan Kota Malang
			</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant='body2' color='textSecondary'>
					malanglibrary@perpusnas.ac.id
				</Typography>
				<ArrowDropDownTwoTone />
			</Box>
		</Container>
	);
}

const Container = styled(Box)({
	padding: '32px 16px 24px',
});
