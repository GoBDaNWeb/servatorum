import { FC } from 'react';

import { TypeButton } from '@/shared/ui';

import { categoryList } from '../../config';

import s from './request-category.module.scss';

interface IRequestCategory {
	nextStep: () => void;
}

export const RequestCategory: FC<IRequestCategory> = ({ nextStep }) => {
	return (
		<div className={s.requestCategory}>
			<p className={s.title}>Категория сбора</p>
			<p className={s.descr}>
				Вы можете выбрать только одну категорию из списка. Это нужно для того чтобы представитель
				фонда нашел ваш сбор
			</p>
			<div className={s.categoryList}>
				{categoryList.map((category, index) => (
					// TODO: Заменить key={index} когда будет апи
					<TypeButton title={category} key={index} onClick={nextStep} />
				))}
			</div>
		</div>
	);
};
