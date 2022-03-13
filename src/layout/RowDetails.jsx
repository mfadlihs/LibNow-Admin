import { Box, Grid } from '@mui/material';
import { CellDetail } from '../Component/DataBuku/CellDetail';
import { CellTool } from '../Component/DataBuku/CellTool';

export function RowDetails({ handleOpen }) {
	return (
		<Grid container>
			{['Pulang-Pergi', 'Tere Liye', '8 Eksemplar', 'Rak Novel - 8.A'].map(
				children => (
					<Grid item md={12 / 5}>
						<CellDetail>{children}</CellDetail>
					</Grid>
				)
			)}
			<Grid item md={12 / 5}>
				<CellTool handleOpen={handleOpen} />
			</Grid>
		</Grid>
	);
}
