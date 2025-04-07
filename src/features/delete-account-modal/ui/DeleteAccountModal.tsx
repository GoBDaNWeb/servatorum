import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { useTypedSelector } from '@/shared/lib';
import { Button, CloseIcon, Modal } from '@/shared/ui';

import { setOpenModal } from '../model';

import s from './delete-account-modal.module.scss';

export const DeleteAccountModal = () => {
	const { isOpen } = useTypedSelector(store => store.deleteAccountModal);
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(setOpenModal(false));
	};

	const contentTop = (
		<>
			<Button className={clsx(s.closeBtn, 'closeBtn')} onClick={handleCloseModal}>
				<CloseIcon />
			</Button>
		</>
	);

	return (
		<Modal
			isOpen={isOpen}
			close={handleCloseModal}
			className={s.deleteAccountModal}
			contentTop={contentTop}
		>
			<div className={s.content}>
				<div className={s.text}>
					<p className={s.title}>Удалить аккаунт</p>
					<p className={s.descr}>
						Вы действительно хотите удалить свой аккаунт? <br />
						Это действие нельзя будет отменить и все ваши достижения, данные о подписках, платежах и
						переводах будут удалены.
					</p>
				</div>
				<div className={s.btns}>
					<Button variant='alert' size='s'>
						Удалить
					</Button>
					<Button variant='default' color='purple' size='s' onClick={handleCloseModal}>
						Не нужно
					</Button>
				</div>
			</div>
		</Modal>
	);
};
