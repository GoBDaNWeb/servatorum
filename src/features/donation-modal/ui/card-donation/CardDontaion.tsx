import { FC, useEffect, useState } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { useTypedSelector } from '@/shared/lib';
import { Button, Checkbox, Input } from '@/shared/ui';

import s from './card-donation.module.scss';

interface ICardDonation {
	nextStep: () => void;
}

export const CardDonation: FC<ICardDonation> = ({ nextStep }) => {
	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

	const {
		donationInfo: { price }
	} = useTypedSelector(store => store.donationModal);
	const { watch, handleSubmit, control } = useForm<FieldValues>({
		defaultValues: {
			cardNumber: '',
			cardDate: '',
			cardCvc: ''
		}
	});

	const onSubmit: SubmitHandler<FieldValues> = data => {
		nextStep();
		console.log(data);
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

	return (
		<form className={s.cardDonation} onSubmit={handleSubmit(onSubmit)}>
			<p className={s.title}>Банковская карта</p>
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
			<p className={s.descr}>
				Платеж безопасен. Мы не храним данные карт, все операции проводит платежная система,
				сетифицированная по международному стандарту безопасности PCI DSS
			</p>
			<div className={s.saveCard}>
				<div className={s.saveCardDescr}>
					<p className={s.title}>Сохранить карту</p>
					<p className={s.descr}>
						Не придеться вводить данные в следующий раз. Карту отвязать можно в личном кабинете.
					</p>
				</div>
				<Checkbox name='save' />
			</div>
			<div className={s.policyWrapper}>
				<p className={s.price}>Оплатить {price} ₽ </p>
				<p className={s.policy}>
					Нажимая на кнопку “Оплатить”, вы принимаете условия <br />
					<a href='#' target='_blank'>
						Пользовательского соглашения
					</a>
				</p>
			</div>
			<Button variant='primary' isDisabled={buttonIsDisabled} className={s.submitBtn} type='submit'>
				Оплатить {price} ₽
			</Button>
		</form>
	);
};
