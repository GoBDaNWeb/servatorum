import { FC, ReactElement } from 'react';

import { Button } from '@/shared/ui';

import s from './profile-empty.module.scss';

interface IProfileEmpty {
	icon: ReactElement;
	title: string;
	descr: string;
	btnText?: string;
	btnLink?: () => void;
}

export const ProfileEmpty: FC<IProfileEmpty> = ({ icon, title, descr, btnText, btnLink }) => {
	return (
		<div className={s.profileEmpty}>
			<div className={s.icon}>{icon}</div>
			<p className={s.title}>{title}</p>
			<p className={s.descr}>{descr}</p>
			{btnText ? (
				<Button variant='primary' size='s' onClick={btnLink}>
					{btnText}
				</Button>
			) : null}
		</div>
	);
};
