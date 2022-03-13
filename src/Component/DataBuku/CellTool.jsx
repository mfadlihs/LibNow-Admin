import {
	Delete,
	DeleteOutlineOutlined,
	ModeEditOutlineOutlined,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { CellDetailContainer } from './CellDetailContainer';

export function CellTool({ handleOpen }) {
	return (
		<CellToolContainer>
			<IconButton>
				<ModeEditOutlineOutlined color='complementary2' />
			</IconButton>
			<IconButton>
				<DeleteOutlineOutlined onClick={handleOpen} color='complementary2' />
			</IconButton>
		</CellToolContainer>
	);
}

const CellToolContainer = styled(CellDetailContainer)({
	display: 'flex',
	justifyContent: 'space-evenly',
});
