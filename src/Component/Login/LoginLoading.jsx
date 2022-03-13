import { Box, CircularProgress } from '@mui/material';

export const LoginLoading = () => {
	return (
		<Box width='min-content' margin='auto' marginBottom='15px'>
			<CircularProgress color='secondary' />
		</Box>
	);
};
