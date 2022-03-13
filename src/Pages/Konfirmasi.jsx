import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Card } from '../Component/Konfirmasi/Card';
import { KonfirmasiModal } from '../Component/Konfirmasi/KonfirmasiModal';
import { Wrapper } from '../Component/Konfirmasi/Wrapper';

export default function Konfirmasi() {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Wrapper>
			{[1, 2, 3].map(i => (
				<Card key={i} handleOpen={handleOpen} />
			))}
			<KonfirmasiModal
				handleOpen={handleOpen}
				open={open}
				handleClose={handleClose}
			/>
		</Wrapper>
	);
}
