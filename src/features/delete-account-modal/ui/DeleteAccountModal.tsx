import clsx from 'clsx';

import { Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import s from './delete-account-modal.module.scss';

export const DeleteAccountModal = () => {
	const { close, currentModal } = useModal();

	const handleCloseModal = () => {
		close();
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
			isOpen={currentModal === 'delete-account'}
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
