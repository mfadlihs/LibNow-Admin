import { Box } from '@mui/material';
import { ModalContainer } from '../../layout/ModalContainer';
import { WrapperModal } from '../../Templates/WrapperModal';
import { ContentModal } from './ModalTambah/ContentModal';
import { HeadingModal } from './ModalTambah/HeadingModal';

export function ModalTambah(props) {
	const { open, handleOpen, handleClose } = props;

	return (
		<ModalContainer open={open} onClose={handleClose}>
			<WrapperModal sx={{ border: '1px solid black' }}>
				<HeadingModal handleClose={handleClose} />
				<ContentModal />
			</WrapperModal>
		</ModalContainer>
	);
}
