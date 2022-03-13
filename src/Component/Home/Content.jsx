import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { DrawerWidth } from '../../layout/Sidebar';

export const Content = styled(Box)({
	flexGrow: 1,
	minHeight: '100vh',
	width: `cal(100% - ${DrawerWidth})`,
});
