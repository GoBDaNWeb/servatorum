import s from './logo.module.scss';

export const Logo = () => {
	const handlScrollTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	};

	return (
		<div className={s.logoWrapper} onClick={handlScrollTop}>
			<img src='/images/logo.svg' alt='logo' />
			<div className={s.logoText}>
				<p>Servatorum</p>
				<p>Свобода делать больше</p>
			</div>
		</div>
	);
};
