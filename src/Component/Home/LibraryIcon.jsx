import { Box } from '@mui/material';
import { styled } from '@mui/system';
import libIcon from '../../Assets/Images/libIcon.png';

export const LibraryIcon = styled(Box)(props => ({
	width: 48,
	height: 48,
	backgroundImage: `url(${libIcon})`,
}));
