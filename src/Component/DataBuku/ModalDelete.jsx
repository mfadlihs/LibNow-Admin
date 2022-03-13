import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { ModalContainer } from '../../layout/ModalContainer';
import { ContentModal } from './ModalDelete/ContentModal';
import { HeadingModal } from './ModalDelete/HeadingModal';

export function ModalDelete(props) {
	const { open, handleOpen, handleClose } = props;

	return (
		<ModalContainer open={open} onClose={handleClose}>
			<WrapperModal>
				<HeadingModal />
				<ContentModal handleClose={handleClose} />
			</WrapperModal>
		</ModalContainer>
	);
}

const WrapperModal = styled(Box)({
	width: 466,
});
