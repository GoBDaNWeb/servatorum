import clsx from 'clsx';

import { whoCards } from '@/pages/home/config';

import { WhoCard } from '@/entities/who-card';

import s from './who.module.scss';

export const Who = () => {
	const whoClass = clsx(s.who, 'container');

	return (
		<div className={whoClass} id='who'>
			<h2>Для кого</h2>
			<div className={s.whoContent}>
				{whoCards.map(card => (
					<WhoCard
						key={card.title}
						img={card.img}
						title={card.title}
						isDisabled={card.isDisabled}
						btnTitle={card.btnTitle}
					/>
				))}
			</div>
		</div>
	);
};
