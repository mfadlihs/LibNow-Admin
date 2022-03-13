import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ButtonForm } from '../Component/Login/ButtonForm';
import { ButtonLink } from '../Component/Login/ButtonLink';
import { Heading } from '../Component/Login/Heading';
import { InputForm } from '../Component/Login/InputForm';
import { LoginError } from '../Component/Login/LoginError';
import { LoginLoading } from '../Component/Login/LoginLoading';
import { Section } from '../Component/Login/Section';
import { libAPI } from '../Config/api';
import { Container } from '../layout/Container';
import { Wrapper } from '../layout/Wrapper';
import { GlobalLink } from '../Themes/GlobalTheme';

export default function Login() {
	const [form, setForm] = useState({ email: '', password: '' });
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const loginHandler = async e => {
		e.preventDefault();
		setIsLoading(true);
		isError && setIsError(false);

		// try{
		//   const LoginRes = await libAPI.post()
		// }
	};

	return (
		<Container>
			<Wrapper width={['400px', '550px']} padding={['30px', '50px']}>
				<Heading variant='h3'>Masuk ke Akun Admin</Heading>
				<form onSubmit={loginHandler} autoComplete='off' id='login'>
					<Section>
						<Typography gutterBottom>E-mail</Typography>
						<InputForm
							placeholder='Alamat E-Mail'
							variant='outlined'
							fullWidth
							type='email'
							required
							onChange={e => {
								setForm(() => ({
									...form,
									email: e.target.value,
								}));
							}}
						/>
					</Section>
					<Section>
						<Typography>Password</Typography>
						<InputForm
							placeholder='password'
							type='password'
							fullWidth
							required
							variant='outlined'
							onChange={e => {
								setForm(() => ({
									...form,
									password: e.target.value,
								}));
							}}
						/>
					</Section>
					{isLoading && <LoginLoading />}
					{isError && <LoginError />}
					<ButtonForm type='submit' color='tertiary' variant='contained'>
						MASUK
					</ButtonForm>
				</form>
				<Typography>
					Belum Punya Akun?{' '}
					<ButtonLink to='/signup' color='secondary'>
						Daftar
					</ButtonLink>
				</Typography>
			</Wrapper>
		</Container>
	);
}
