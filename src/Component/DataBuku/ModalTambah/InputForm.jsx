import { Box, TextField } from '@mui/material';
import { styled } from '@mui/system';

export function InputForm() {
	return (
		<Box>
			<form autoComplete='off'>
				<Input color='complementary2' fullWidth placeholder='Judul Buku' />
				<Input color='complementary2' fullWidth placeholder='Penulis' />
				<Input color='complementary2' fullWidth placeholder='ISBN' />
				<Input color='complementary2' fullWidth placeholder='Penerbit' />
				<Input color='complementary2' fullWidth placeholder='Jumlah Stok' />
				<Input color='complementary2' fullWidth placeholder='Bahasa' />
				<Input color='complementary2' fullWidth placeholder='Letak Buku' />
				<Input
					color='complementary2'
					fullWidth
					placeholder='Sinopsis'
					multiline
					rows={5}
					sx={{ marginBottom: '0' }}
				/>
			</form>
		</Box>
	);
}

const Input = styled(TextField)({
	marginBottom: 15,
	backgroundColor: 'white',
});
