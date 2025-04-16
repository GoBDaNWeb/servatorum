import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { BankCard } from '@/entities/bank-card';

import { cards, crumbs } from '../config';

import s from './profile-cards.module.scss';

export const ProfileCards = () => {
	return (
		<ProfileWrapper crumbs={crumbs} title='Мои карты' className={s.profileCards}>
			<div className={s.cardsList}>
				{cards.map((card, index) => (
					// TODO: Заменить key={index} когда будет апи
					<BankCard
						title={card.title}
						number={card.number}
						icon={card.icon}
						isMain={card.isMain}
						key={index}
					/>
				))}
				<BankCard />
			</div>
		</ProfileWrapper>
	);
};
