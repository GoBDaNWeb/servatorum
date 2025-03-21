import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { useTypedSelector } from '@/shared/lib';
import { Button, CloseIcon, Modal } from '@/shared/ui';

import { setOpenModal } from '../model';

import s from './support-fond-modal.module.scss';

export const SupportFondModal = () => {
	const { isOpen } = useTypedSelector(store => store.supportFondModal);
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(setOpenModal(false));
	};

	const modalContentClass = clsx(s.modalContentWrapper, 'modal-content');

	return (
		<Modal isOpen={isOpen} close={handleCloseModal} className={s.supportFondModal}>
			<div className={modalContentClass} onClick={e => e.stopPropagation()}>
				<div className={s.modalContentTop}>
					<Button className={s.closeBtn} onClick={handleCloseModal}>
						<CloseIcon />
					</Button>
				</div>

				<div className={s.modalContent}></div>
			</div>
		</Modal>
	);
};
