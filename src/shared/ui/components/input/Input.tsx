import { ReactElement } from 'react';
import { IMaskMixin } from 'react-imask';

import clsx from 'clsx';

import { ClearIcon } from '../../icons';
import { Button } from '../button';

import s from './input.module.scss';

import 'air-datepicker/air-datepicker.css';

export const Input = IMaskMixin(({ inputRef, className, clear, req, prefIcon, icon, ...props }) => {
	const { isActive, title } = props;

	const inputWrapperClass = clsx(s.inputWrapper, className, {
		[s.active]: isActive
	});

	return (
		<div className={inputWrapperClass}>
			{title ? (
				<p className={s.title}>
					{title} {req ? <span>*</span> : null}
				</p>
			) : null}
			<label className={s.input}>
				{prefIcon ? <img src={prefIcon as string} alt='icon' /> : null}

				<input {...props} ref={inputRef as React.Ref<HTMLInputElement>} />

				{clear ? (
					<Button onClick={clear as () => void} className={s.clearBtn} variant='clear'>
						<ClearIcon />
					</Button>
				) : null}
				{icon ? (icon as ReactElement) : null}
			</label>
		</div>
	);
});
