import { FC } from 'react';

import { Button, Input } from '@/shared/ui';

import s from './add-billing-modal-content.module.scss';

interface IAddBillingModalContent {
	nextStep: () => void;
}

export const AddBillingModalContent: FC<IAddBillingModalContent> = ({ nextStep }) => {
	return (
		<div className={s.addBillingModalContent}>
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
				<Button variant='primary' onClick={nextStep}>
					Добавить счёт
				</Button>
			</div>
		</div>
	);
};
