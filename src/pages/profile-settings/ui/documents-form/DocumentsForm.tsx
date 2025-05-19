import { FC } from 'react';
import { Control, FieldValues } from 'react-hook-form';

import { DocumentItem } from '@/entities/document-item';

import s from '../profile-settings.module.scss';

interface IDocumentsForm {
	control: Control<FieldValues>;
}

export const DocumentsForm: FC<IDocumentsForm> = () => {
	return (
		<div className={s.dataBlock}>
			<div className={s.titleBlock}>
				<div className='sticky-block'>
					<p className={s.title}>Документы</p>
				</div>
			</div>
			<div className={s.inputsBlock}>
				<div className={s.inputWrapper}>
					<p>Устав фонда</p>
					<DocumentItem />
				</div>
				<div className={s.inputWrapper}>
					<p>Сертификат регистрации</p>
					<DocumentItem />
				</div>
			</div>
		</div>
	);
};
