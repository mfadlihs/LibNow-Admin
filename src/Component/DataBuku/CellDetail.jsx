import { Typography } from '@mui/material';
import { CellDetailContainer } from './CellDetailContainer';

export function CellDetail({ children }) {
	return (
		<CellDetailContainer>
			<Typography>{children}</Typography>
		</CellDetailContainer>
	);
}
