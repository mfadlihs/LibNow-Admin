import { Box, Drawer } from '@mui/material';
import { styled } from '@mui/system';
import { LibraryIcon } from '../Component/Home/LibraryIcon';
import { Dashboard } from '../Templates/Dashboard';
import { HeadingSide } from '../Templates/HeadingSide';
import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Themes/GlobalTheme';

export const DrawerWidth = '305px';

export function Sidebar() {
	return (
		<SidebarContainer>
			<HeadingSide />
			<Dashboard />
		</SidebarContainer>
	);
}

const SidebarContainer = styled(Box)({
	backgroundColor: tertiary,
	position: 'fixed',
	height: '100vh',
	boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.25)',
	width: DrawerWidth,
});
