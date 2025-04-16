import clsx from 'clsx';

import { Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import s from './delete-card-modal.module.scss';

export const DeleteCardModal = () => {
	const { close, isOpen } = useModal();

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
			isOpen={isOpen('delete-card')}
			close={handleCloseModal}
			className={s.deleteCardModal}
			contentTop={contentTop}
		>
			<div className={s.content}>
				<div className={s.text}>
					<p className={s.title}>Вы хотите удалить карту ?</p>
					<p className={s.descr}>Чтобы платить ей в будущем, нужно будет вводить данные вручную</p>
				</div>
				<div className={s.btns}>
					<Button variant='primary' size='s'>
						Удалить
					</Button>
					<Button variant='default' color='purple' size='s' onClick={handleCloseModal}>
						Отмена
					</Button>
				</div>
			</div>
		</Modal>
	);
};
