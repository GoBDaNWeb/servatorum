import { useState } from 'react';

import clsx from 'clsx';

import { Button, DropdownArrow, Image, UserMenu } from '@/shared/ui';

import s from './user-dropdown.module.scss';

export const UserDropdown = () => {
	const [dropdownActive, setDropdownActive] = useState(false);
	const handleOpenDropdown = () => {
		setDropdownActive(prev => !prev);
	};

	const userDropdownClass = clsx(s.userDropdown, {
		[s.active]: dropdownActive
	});

	return (
		<div className={userDropdownClass} onMouseLeave={() => setDropdownActive(false)}>
			<Button variant='clear' className={s.user} onClick={handleOpenDropdown}>
				<Image className={s.image} src='/images/fond.jpg' alt='fond' isGradient />
				<span>
					Профиль
					<DropdownArrow />
				</span>
			</Button>
			<div className={s.dropdown}>
				<UserMenu className={s.userMenu} />
			</div>
		</div>
	);
};
