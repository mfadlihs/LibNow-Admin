import { Box, Grid, Typography } from '@mui/material';
import { CellHeading } from './CellHeading';

export function RowHeading() {
	return (
		<Grid container>
			{['Judul', 'Penulis', 'Jumlah', 'Lokasi', 'Tools'].map(children => (
				<Grid item md={12 / 5}>
					<CellHeading>{children}</CellHeading>
				</Grid>
			))}
		</Grid>
	);
}
