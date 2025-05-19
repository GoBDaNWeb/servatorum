import clsx from 'clsx';

import { Button, CloseIcon, Input, Modal, useModal } from '@/shared/ui';

import s from './billing-info-modal.module.scss';

export const BillingInfoModal = () => {
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
			isOpen={isOpen('billing-info')}
			close={handleCloseModal}
			className={s.BillingInfoModal}
			contentTop={contentTop}
		>
			<div className={s.content}>
				<div className={s.textWrapper}>
					<p className={s.title}>Информация счёта</p>

					<Input title='Название' req placeholder='Введите' />
					<ul className={s.billingInfoList}>
						<li>
							<p>БИК</p>
							<p>056523648</p>
						</li>
						<li>
							<p>К/с №</p>
							<p>50319140500000009456</p>
						</li>
						<li>
							<p>Счет №</p>
							<p>40878608600000001068</p>
						</li>
					</ul>
				</div>
				<div className={s.btns}>
					<Button variant='primary' onClick={handleCloseModal}>
						Сохранить
					</Button>
					<Button variant='default' color='purple' size='s' onClick={handleCloseModal}>
						Удалить
					</Button>
				</div>
			</div>
		</Modal>
	);
};
