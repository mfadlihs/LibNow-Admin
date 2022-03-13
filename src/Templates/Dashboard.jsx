import { Logout, PlaylistAdd, PlaylistAddCheck } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardSection } from '../Component/Home/DashboardSection';
import { TextDashboard } from '../Component/Home/TextDashboard';
import { GlobalLink } from '../Themes/GlobalTheme';

export function Dashboard() {
	const [isKonfirmasi, setIsKonfirmasi] = useState(false);
	const [isDashboard, setIsDashboard] = useState(false);
	const navigate = useNavigate();

	const togleKonfirmasi = () => {
		if (isDashboard) {
			setIsDashboard(!isDashboard);
		}
		if (isKonfirmasi) {
			return;
		}
		setIsKonfirmasi(!isKonfirmasi);
	};

	const togleDashboard = () => {
		if (isKonfirmasi) {
			setIsKonfirmasi(!isKonfirmasi);
		}
		if (isDashboard) {
			return;
		}
		setIsDashboard(!isDashboard);
	};

	return (
		<>
			<TextDashboard
				variant='button'
				sx={{ display: 'block', marginLeft: '18px', marginBottom: '18px' }}
			>
				Dashboard
			</TextDashboard>
			<GlobalLink to='/konfirmasi'>
				<DashboardSection onClick={togleKonfirmasi} active={isKonfirmasi}>
					<PlaylistAddCheck />
					<TextDashboard variant='button' color='secondary'>
						Permintaan Konfirmasi
					</TextDashboard>
				</DashboardSection>
			</GlobalLink>
			<GlobalLink to='/data-buku'>
				<DashboardSection onClick={togleDashboard} active={isDashboard}>
					<PlaylistAdd />
					<TextDashboard variant='button' color='secondary'>
						Data Buku
					</TextDashboard>
				</DashboardSection>
			</GlobalLink>
			<DashboardSection>
				<Logout />
				<TextDashboard variant='button' color='secondary'>
					Keluar
				</TextDashboard>
			</DashboardSection>
		</>
	);
}
