import { Box } from '@mui/material';
import { styled } from '@mui/system';
import cardImage from '../../Assets/Images/cardImage.png';

export const CardImage = styled(Box)({
	aspectRatio: '2/3',
	height: 175,
	backgroundImage: `url(${cardImage})`,
	backgroundSize: 'cover',
});
