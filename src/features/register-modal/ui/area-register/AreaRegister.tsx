import { FC } from 'react';

import { Button, Chip } from '@/shared/ui';

import s from './area-register.module.scss';

interface IAreaRegister {
	closeModal: () => void;
}

const chips = [
	'Доступная среда',
	'Лечение',
	'Безопасная среда',
	'Психология и психотерапия',
	'Гуманитарная помощь',
	'Социальная поддержка',
	'Наука и искусство',
	'Животные',
	'Pro-bono',
	'ESG',
	'Профилактика и физеотерапия',
	'Религиозные организации',
	'Волонтеры',
	'Паллиативная помощь',
	'Поисковый отряд',
	'Сообщество волонтеров',
	'Мероприятия фондов'
];

export const AreaRegister: FC<IAreaRegister> = ({ closeModal }) => {
	return (
		<div className={s.areaRegister}>
			<p className={s.title}>Выберите сферу</p>
			<p className={s.descr}>
				Фонды и сборы с выбранными категориями будут отображаться в ленте в первую очередь
			</p>
			<div className={s.chipListWrapper}>
				<div className={s.chipList}>
					{chips.map(chip => (
						<Chip name='area' key={chip}>
							{chip}
						</Chip>
					))}
				</div>
			</div>

			<Button onClick={closeModal} variant='primary' className={s.submitBtn}>
				Продолжить
			</Button>
		</div>
	);
};
