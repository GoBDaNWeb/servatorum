import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import clsx from 'clsx';

import { convertDate, useTypedSelector } from '@/shared/lib';
import { Button, CloseIcon, useModal } from '@/shared/ui';

import { AdminNameForm } from '../admin-name-form';
import { CategoryForm } from '../category-form';
import { ContactInfoForm } from '../contact-info-form';
import { DocumentsForm } from '../documents-form';
import { FondContactsForm } from '../fond-contacts-form';
import { FondInfoForm } from '../fond-info-form';
import { FondRequisitesForm } from '../fond-requisites-form';
import { NotificationsForm } from '../notifications-form';
import { PaymentDetailsForm } from '../payment-details-form';
import { PersonalInfoForm } from '../personal-info-form';
import s from '../profile-settings.module.scss';

export const SettingsForm = () => {
	const { userData } = useTypedSelector(store => store.user);

	if (!userData) return null;

	const { open } = useModal();
	const {
		handleSubmit,
		control,
		setValue
		// formState: { isDirty }
	} = useForm<FieldValues>({
		defaultValues: {
			last_name: userData.last_name,
			first_name: userData.first_name,
			surname: userData.surname,
			date_of_birth: convertDate(userData.date_of_birth, false),
			city: userData.city,
			phone: userData.phone,
			email: userData.email,
			gender: userData.gender
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
			{location.search.length > 0 ? (
				<>
					<FondInfoForm control={control} setValue={setValue} />
					<AdminNameForm control={control} />
					<FondContactsForm control={control} />
					<FondRequisitesForm control={control} />
					<PaymentDetailsForm />
					<CategoryForm />
					<DocumentsForm control={control} />
				</>
			) : (
				<>
					<PersonalInfoForm control={control} setValue={setValue} />
					<ContactInfoForm control={control} />
					<NotificationsForm />
					{/* <PasswordForm control={control} /> */}
					{userData.spheres.length > 0 ? <CategoryForm /> : null}
				</>
			)}

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
