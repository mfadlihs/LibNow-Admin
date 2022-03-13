import { Box, Drawer, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Outlet } from 'react-router-dom';
import { Container, DrawerWidth } from '../Component/Home/Container';
import { Content } from '../Component/Home/Content';
import { libAPI } from '../Config/api';
import { Sidebar } from '../layout/Sidebar';
import { SidebarBack } from '../layout/SidebarBack';
import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Themes/GlobalTheme';

export default function Home() {
	return (
		<Container>
			<Sidebar />
			<SidebarBack />
			<Content>
				<Outlet />
			</Content>
		</Container>
	);
}
