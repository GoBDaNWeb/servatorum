import clsx from 'clsx';

import { Button, Logo, ParadigmaIcon } from '@/shared/ui';

import s from './footer.module.scss';

export const Footer = () => {
	const footerInnerClass = clsx(s.footerInner, 'container');

	return (
		<footer className={s.footer}>
			<div className={footerInnerClass}>
				<div className={s.footerTop}>
					<Logo />
					<div className={s.links}>
						<Button variant='secondary' isLink href='#' size='l'>
							<img src='/images/icons/app-store.svg' alt='' />
						</Button>
						<Button variant='secondary' isLink href='#' size='l'>
							<img src='/images/icons/google-store.svg' alt='' />
						</Button>
					</div>
				</div>
				<div className={s.footerBottom}>
					<p className={s.descr}>
						Инновационная платформа для тех, <br /> кто ищет поддержку и желает помочь.
					</p>
					<div className={s.info}>
						<p>© 2024. Servatorum — свобода делать больше.</p>
						<div className={s.alert}>
							<img src='/images/icons/cat.png' alt='' />
							<p>Памагити построить прекрасное будущее вместе с Servatorum! </p>
						</div>
						<a href='#' target='_blank'>
							<ParadigmaIcon />
							Разработка сайта – Paradigma
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
