import { AddCircle } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { Container } from '../Component/DataBuku/Container';
import { RowHeading } from '../Component/DataBuku/RowHeading';
import { Heading } from '../Component/DataBuku/Heading';
import { GlobalButton } from '../Themes/GlobalTheme';
import { RowDetails } from '../layout/RowDetails';
import { ModalDelete } from '../Component/DataBuku/ModalDelete';
import { useState } from 'react';
import { ModalTambah } from '../Component/DataBuku/ModalTambah';

export default function DataBuku() {
	const [openDelete, setOpenDelete] = useState(false);
	const [openTambah, setOpenTambah] = useState(false);

	const handleOpenDelete = () => {
		setOpenDelete(true);
	};

	const handleCloseDelete = () => {
		setOpenDelete(false);
	};

	const handleOpenTambah = () => {
		setOpenTambah(true);
	};

	const handleCloseTambah = () => {
		setOpenTambah(false);
	};

	return (
		<Container>
			<Heading>
				<Typography variant='h3'>Data Buku</Typography>
				<GlobalButton
					startIcon={<AddCircle />}
					variant='contained'
					color='tertiary'
					onClick={handleOpenTambah}
				>
					Tambah Buku
				</GlobalButton>
			</Heading>
			<RowHeading />
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i, index) => (
				<>
					<RowDetails handleOpen={handleOpenDelete} key={i} />
					<Divider />
				</>
			))}
			<ModalDelete
				handleOpen={handleOpenDelete}
				open={openDelete}
				handleClose={handleCloseDelete}
			/>
			<ModalTambah
				open={openTambah}
				handleOpen={handleOpenTambah}
				handleClose={handleCloseTambah}
			/>
		</Container>
	);
}
