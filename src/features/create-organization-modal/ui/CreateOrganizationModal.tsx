import clsx from 'clsx';

import { Button, CloseIcon, Modal, TypeButton, useModal } from '@/shared/ui';

import s from './create-organization-modal.module.scss';

export const CreateOrganizationModal = () => {
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
			isOpen={isOpen('create-organization')}
			close={handleCloseModal}
			className={s.createOrganizationModal}
			contentTop={contentTop}
		>
			<div className={s.content}>
				<p className={s.title}>Какую организацию хотите создать ?</p>
				<div className={s.typeList}>
					<TypeButton title='Фонд' img='/images/icons/fond-icon.svg' onClick={() => {}} />
					<TypeButton title='Компания' img='/images/icons/company-icon.svg' onClick={() => {}} />
				</div>
			</div>
		</Modal>
	);
};
