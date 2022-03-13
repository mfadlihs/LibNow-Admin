import { Box, Modal } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect } from 'react';
import { ModalContainer } from '../../layout/ModalContainer';
import { ContentModal } from './ContentModal';
import { HeadingModal } from './HeadingModal';

export function KonfirmasiModal(props) {
	const { open, handleClose, handleOpen } = props;

	useEffect(() => {
		console.log(open);
	});

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
