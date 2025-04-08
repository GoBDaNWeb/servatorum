import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import clsx from 'clsx';

import { Button, CloseIcon, useModal } from '@/shared/ui';

import { CategoryForm } from '../category-form';
import { ContactInfoForm } from '../contact-info-form';
import { NotificationsForm } from '../notifications-form';
import { PasswordForm } from '../password-form';
import { PersonalInfoForm } from '../personal-info-form';
import s from '../profile-settings.module.scss';

export const SettingsForm = () => {
	const { open } = useModal();

	const { handleSubmit, control, setValue } = useForm<FieldValues>({
		defaultValues: {
			lastName: 'Елизарова',
			firstName: 'Светлана',
			middleName: 'Сергеевна',
			date: '13.07.1993'
		}
	});
	const onSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data);
	};
	const handleOpenDeleteAccountModal = () => {
		open('delete-account');
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<PersonalInfoForm control={control} setValue={setValue} />
			<ContactInfoForm control={control} />
			<NotificationsForm />
			<PasswordForm control={control} />
			<CategoryForm />

			<div className={clsx(s.dataBlock, s.dataBlockBottom)}>
				<Button variant='primary' size='s' isDisabled>
					Сохранить изменения
				</Button>
				<Button variant='text' className={s.deleteBtn} onClick={handleOpenDeleteAccountModal}>
					<CloseIcon />
					Удалить аккаунт
				</Button>
			</div>
		</form>
	);
};
