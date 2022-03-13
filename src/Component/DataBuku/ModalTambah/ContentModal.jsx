import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { primary } from '../../../Themes/GlobalTheme';
import { InputForm } from './InputForm';
import { Side } from './Side';

export function ContentModal() {
	return (
		<Container>
			<InputForm />
			<Side />
		</Container>
	);
}
const Container = styled(Box)({
	padding: '45px 30px',
	backgroundColor: primary,
	display: 'flex',
	gap: 30,
});
