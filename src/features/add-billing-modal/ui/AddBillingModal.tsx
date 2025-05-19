import clsx from 'clsx';

import { Button, CloseIcon, Input, Modal, useModal } from '@/shared/ui';

import s from './add-billing-modal.module.scss';

export const AddBillingModal = () => {
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
			isOpen={isOpen('add-billing')}
			close={handleCloseModal}
			className={s.AddBillingModal}
			contentTop={contentTop}
		>
			<div className={s.content}>
				<div className={s.textWrapper}>
					<p className={s.title}>Добавить счёт</p>
					<div className={s.inputs}>
						<Input title='Название' req placeholder='Введите' />
						<Input title='БИК' req placeholder='Введите' />
						<Input title='К/с №' req placeholder='Введите' />
						<Input title='Счет №' req placeholder='Введите' />
					</div>
				</div>
				<div className={s.btns}>
					<Button variant='primary' onClick={handleCloseModal}>
						Добавить счёт
					</Button>
				</div>
			</div>
		</Modal>
	);
};
