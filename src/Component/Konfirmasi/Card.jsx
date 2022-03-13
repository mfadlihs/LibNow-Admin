import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { CardButton } from './CardButton';
import { CardContent } from './CardContent';
import { CardImage } from './CardImage';

export function Card({ handleOpen }) {
	return (
		<CardContainer>
			<CardImage />
			<CardContent />
			<CardButton handleOpen={handleOpen} />
		</CardContainer>
	);
}

const CardContainer = styled(Box)({
	display: 'grid',
	paddingRight: 30,
	alignItems: 'center',
	gridTemplateColumns: 'auto 1fr auto',
	boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
	gap: '10px',
	marginBottom: 30,
});
