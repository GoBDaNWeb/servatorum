import clsx from 'clsx';

import { Button, CloseIcon, Modal, TypeButton, useModal } from '@/shared/ui';

import s from './change-account-modal.module.scss';

export const ChangeAccountModal = () => {
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
			isOpen={isOpen('change-account')}
			close={handleCloseModal}
			className={s.changeAccountModal}
			contentTop={contentTop}
		>
			<div className={s.content}>
				<p className={s.title}>Мои профили</p>
				<div className={s.typeList}>
					<TypeButton
						title='Елизарова Светлана'
						subTitle='Пользователь'
						img='/images/icons/fond-icon.svg'
						onClick={() => {}}
					/>
					<TypeButton
						title='Свет Будущего '
						subTitle='Фонд'
						img='/images/icons/company-icon.svg'
						onClick={() => {}}
					/>
				</div>
			</div>
		</Modal>
	);
};
