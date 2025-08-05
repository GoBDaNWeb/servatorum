import s from './loader.module.scss';

export const Loader = () => {
	return (
		<div className={s.loaderWrapper}>
			<div className={s.logoWrapper}>
				<img src='/images/icons/logo.svg' alt='logo' />
				<p>SERVATORUM</p>
			</div>
			<div className={s.loader}>
				<span>Загрузка</span>
				<span>Загрузка</span>
			</div>
		</div>
	);
};
