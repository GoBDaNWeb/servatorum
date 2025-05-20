import { FC, useEffect, useState } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { Button, Input, useModal } from '@/shared/ui';

import s from './card-form.module.scss';

interface ICardForm {
	nextStep: () => void;
}

export const CardForm: FC<ICardForm> = ({ nextStep }) => {
	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
	const { close } = useModal();

	const { watch, handleSubmit, control } = useForm<FieldValues>({
		defaultValues: {
			cardNumber: '',
			cardDate: '',
			cardCvc: ''
		}
	});

	const onSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data);
		nextStep();
	};

	useEffect(() => {
		const { unsubscribe } = watch(value => {
			if (value.cardNumber.length < 25 || value.cardDate.length < 5 || value.cardCvc.length < 3) {
				setButtonIsDisabled(true);
			} else {
				setButtonIsDisabled(false);
			}
		});
		return () => unsubscribe();
	}, [watch]);

	const handleCloseModal = () => {
		close();
	};
	return (
		<form className={s.cardForm} onSubmit={handleSubmit(onSubmit)}>
			<p className={s.title}>Новая карта</p>
			<div className={s.inputs}>
				<Controller
					control={control}
					name='cardNumber'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								title='Номер карты'
								mask='0000 - 0000 - 0000 - 0000'
								placeholder='0000 - 0000 - 0000 - 0000'
								onAccept={(value: string) => onChange(value)}
								prefIcon='/images/icons/card-outline-icon.svg'
								className={s.cardNumber}
							/>
						);
					}}
				/>
				<div className={s.row}>
					<Controller
						control={control}
						name='cardDate'
						rules={{ required: true }}
						render={({ field: { onChange } }) => {
							return (
								<Input
									title='Срок действия'
									mask='00/00'
									placeholder='00/00'
									onAccept={(value: string) => onChange(value)}
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name='cardCvc'
						rules={{ required: true }}
						render={({ field: { onChange } }) => {
							return (
								<Input
									title='CVV/CVC'
									mask='000'
									placeholder='000'
									onAccept={(value: string) => onChange(value)}
								/>
							);
						}}
					/>
				</div>
			</div>
			<div className={s.btns}>
				<Button
					variant='primary'
					isDisabled={buttonIsDisabled}
					className={s.submitBtn}
					type='submit'
				>
					Привязать
				</Button>
				<Button variant='default' type='button' color='purple' size='s' onClick={handleCloseModal}>
					Отмена
				</Button>
			</div>
		</form>
	);
};
