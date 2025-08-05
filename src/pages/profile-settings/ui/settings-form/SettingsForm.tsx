import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { setUser } from '@/entities/user';

import { useUpdateUserMutation } from '@/shared/api';
import { convertDate, formatPhone, useTypedSelector } from '@/shared/lib';
import { IUser } from '@/shared/types';
import { Button, CloseIcon, useModal } from '@/shared/ui';

import { AdminNameForm } from '../admin-name-form';
import { CategoryForm } from '../category-form';
import { ContactInfoForm } from '../contact-info-form';
import { DocumentsForm } from '../documents-form';
import { FondContactsForm } from '../fond-contacts-form';
import { FondInfoForm } from '../fond-info-form';
import { FondRequisitesForm } from '../fond-requisites-form';
import { PaymentDetailsForm } from '../payment-details-form';
import { PersonalInfoForm } from '../personal-info-form';
import s from '../profile-settings.module.scss';

export const SettingsForm = () => {
	const { userData } = useTypedSelector(store => store.user);
	const [updateUser] = useUpdateUserMutation();
	const dispatch = useDispatch();
	const [isSubmitting, setIsSubmitting] = useState(false);

	if (!userData) return null;

	const { open } = useModal();
	const {
		watch,
		handleSubmit,
		control,
		setValue,
		reset,
		formState: { dirtyFields, defaultValues }
	} = useForm<FieldValues>({
		mode: 'onChange',
		defaultValues: {
			last_name: userData.last_name,
			first_name: userData.first_name,
			surname: userData.surname,
			date_of_birth: convertDate(userData.date_of_birth, false),
			city: userData.city,
			phone: formatPhone(userData.phone, false),
			email: userData.email,
			gender: userData.gender
		}
	});

	const formValues = watch();

	const handleUpdateUser = async (updatedFields: Partial<IUser>) => {
		setIsSubmitting(true);
		try {
			const { data } = await updateUser({
				id: userData.id as number,
				body: {
					params: updatedFields
				}
			});

			if (data) {
				dispatch(setUser(data));
				reset({
					last_name: data.last_name,
					first_name: data.first_name,
					surname: data.surname,
					date_of_birth: data.date_of_birth ? convertDate(data.date_of_birth, false) : '',
					city: data.city,
					phone: formatPhone(data.phone, false),
					email: data.email,
					gender: data.gender
				});
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const hasChanges = Object.keys(formValues).some(key => {
		const currentValue = formValues[key as keyof typeof formValues];
		const initialValue = defaultValues?.[key as keyof typeof defaultValues];

		return currentValue !== initialValue;
	});

	const onSubmit: SubmitHandler<FieldValues> = data => {
		const updatedFields: Partial<IUser> = {};
		Object.keys(dirtyFields).forEach(key => {
			// Специальная обработка для даты рождения
			if (key === 'date_of_birth') {
				(updatedFields as any)[key] = convertDate(data[key] as string, true);
			} else {
				updatedFields[key as keyof IUser] = data[key as keyof typeof data];
			}
		});

		handleUpdateUser(updatedFields);
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
					{/* <NotificationsForm /> */}
					{/* <PasswordForm control={control} /> */}
					{userData.spheres && userData.spheres.length > 0 ? <CategoryForm /> : null}
				</>
			)}

			<div className={clsx(s.dataBlock, s.dataBlockBottom)}>
				<Button variant='primary' type='submit' size='s' isDisabled={!hasChanges || isSubmitting}>
					{isSubmitting ? 'Сохранение...' : 'Сохранить изменения'}
				</Button>
				<Button
					variant='text'
					type='button'
					className={s.deleteBtn}
					onClick={handleOpenDeleteAccountModal}
				>
					<CloseIcon />
					Удалить аккаунт
				</Button>
			</div>
		</form>
	);
};
