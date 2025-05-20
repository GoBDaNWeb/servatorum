import { FC } from 'react';

import { Button, Checkbox } from '@/shared/ui';

import { subcategoryList } from '../../config';

import s from './request-subcategory.module.scss';

interface IRequestSubcategory {
	nextStep: () => void;
}

export const RequestSubcategory: FC<IRequestSubcategory> = ({ nextStep }) => {
	return (
		<div className={s.requestSubategory}>
			<div className={s.mainContent}>
				<p className={s.title}>Подкатегории сбора</p>
				<p className={s.descr}>
					Укажите только те подкатегории которые на ваш взгляд относятся к вашему сбору. Это нужно
					для формирования необходимого списка документов
				</p>
				<div className={s.categoryList}>
					<Checkbox name='phoneCheck' className={s.checkboxWrapper}>
						Выбрать все
					</Checkbox>
					{subcategoryList.map((subcategory, index) => (
						// TODO: Заменить key={index} когда будет апи
						<Checkbox name='phoneCheck' key={index} className={s.checkboxWrapper}>
							{subcategory}
						</Checkbox>
					))}
				</div>
			</div>

			<Button variant='primary' onClick={nextStep}>
				Продолжить
			</Button>
		</div>
	);
};
