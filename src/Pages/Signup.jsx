import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ButtonForm } from '../Component/Login/ButtonForm';
import { ButtonLink } from '../Component/Login/ButtonLink';
import { Heading } from '../Component/Login/Heading';
import { InputForm } from '../Component/Login/InputForm';
import { Container } from '../layout/Container';
import { Wrapper } from '../layout/Wrapper';

export default function Signup() {
	const [forms, setForms] = useState({
		email: '',
		password: '',
		libraryname: '',
		province: '',
		city: '',
		district: '',
		neighborhoods: '',
		address: '',
		phonenumber: '',
	});

	return (
		<Container>
			<Wrapper width={['400px', '550px']} padding={['30px', '50px']}>
				<Heading variant='h3'>Buat Akun Baru</Heading>
				<form autoComplete='off' id='signup'>
					<InputForm
						variant='outlined'
						placeholder='Nama Perpustakaan'
						fullWidth
						required
						onChange={e => {
							setForms(() => ({
								...forms,
								libraryname: e.target.value,
							}));
						}}
					/>
					<InputForm
						type='email'
						variant='outlined'
						placeholder='Email'
						required
						onChange={e => {
							setForms(() => ({
								...forms,
								email: e.target.value,
							}));
						}}
					/>
					<InputForm
						type='number'
						variant='outlined'
						placeholder='Telepon'
						required
						onChange={e => {
							setForms(() => ({
								...forms,
								phonenumber: e.target.value,
							}));
						}}
					/>
					<InputForm
						type='password'
						variant='outlined'
						placeholder='Kata Sandi'
						required
						fullWidth
						sx={{ marginBottom: '15px' }}
						onChange={e => {
							setForms(() => ({
								...forms,
								password: e.target.value,
							}));
						}}
					/>
					<Typography variant='body2' gutterBottom>
						Alamat
					</Typography>
					<InputForm
						type='text'
						variant='outlined'
						placeholder='Provinsi'
						required
						onChange={e => {
							setForms(() => ({
								...forms,
								province: e.target.value,
							}));
						}}
					/>
					<InputForm
						type='text'
						variant='outlined'
						placeholder='Kota'
						required
						onChange={e => {
							setForms(() => ({
								...forms,
								city: e.target.value,
							}));
						}}
					/>
					<InputForm
						type='text'
						variant='outlined'
						placeholder='Kecamatan'
						required
						onChange={e => {
							setForms(() => ({
								...forms,
								district: e.target.value,
							}));
						}}
					/>
					<InputForm
						type='text'
						variant='outlined'
						placeholder='Kelurahan'
						required
						onChange={e => {
							setForms(() => ({
								...forms,
								neighborhoods: e.target.value,
							}));
						}}
					/>
					<InputForm
						multiline
						placeholder='Alamat Lengkap'
						fullWidth
						rows={4}
						sx={{ marginBottom: '20px' }}
						onChange={e => {
							setForms(() => ({
								...forms,
								address: e.target.value,
							}));
						}}
					/>
					<ButtonForm variant='contained' color='tertiary'>
						DAFTAR
					</ButtonForm>
				</form>
				<Typography>
					Sudah memiliki akun admin? <ButtonLink to='/login'>Masuk</ButtonLink>
				</Typography>
			</Wrapper>
		</Container>
	);
}
