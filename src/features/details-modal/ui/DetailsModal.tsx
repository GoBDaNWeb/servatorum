import clsx from 'clsx';

import { Badge, Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import s from './details-modal.module.scss';

export const DetailsModal = () => {
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
			isOpen={isOpen('details')}
			close={handleCloseModal}
			className={s.detailsModal}
			contentTop={contentTop}
		>
			<div className={s.modalContent}>
				<div className={s.mainContent}>
					<p className={s.title}>Детали отказа</p>
					<div className={s.requestInfo}>
						<div className={s.titleWrapper}>
							<p className={s.requestId}>Заявка №2424255</p>
							<p className={s.date}>Создано 21.07.2023</p>
						</div>
						<Badge variant='clear' color='red' size='m' className={s.badge}>
							<img src='/images/icons/reject.svg' alt='status' />
							Отказано
						</Badge>
					</div>
					<div className={s.comment}>
						<p className={s.title}>Комментарий</p>
						<p className={s.descr}>
							Уважаемый, Сергей! В связи с не предоставлением исчерпывающего списка документов мы не
							можем опубликовать сбора через наш агрегатор. Вы можете сформировать новую заявку
							приложив все необходимые документы
						</p>
					</div>
				</div>
				<Button variant='primary' color='purple'>
					Написать в чат
				</Button>
			</div>
		</Modal>
	);
};
