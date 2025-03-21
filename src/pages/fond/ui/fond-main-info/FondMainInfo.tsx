import { useEffect, useState } from 'react';

import { SponsorCard } from '@/entities/sponsor-card';

import {
	Badge,
	Button,
	CheckIcon,
	DownOutlineArrowIcon,
	Image,
	Tab,
	TabList,
	TabPanel,
	Tabs
} from '@/shared/ui';

import { badges, sponsors, sponsors2 } from '../../config';

import s from './fond-main-info.module.scss';

export const FondMainInfo = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [sponsorsList, setSponsorsList] = useState(sponsors.slice(0, 4));

	const handleShowAllSponsors = () => {
		setSponsorsList(activeTab === 0 ? sponsors : sponsors2);
	};

	useEffect(() => {
		console.log('Активный таб:', activeTab);

		setSponsorsList(activeTab === 0 ? sponsors.slice(0, 4) : sponsors2.slice(0, 4));
	}, [activeTab]);

	return (
		<div className={s.fondMainInfo}>
			<div className={s.fondMainInfoContent}>
				<div className={s.imageBlock}>
					<div className='sticky-block'>
						<Image className={s.image} src='/images/fond.jpg' alt='fond' isGradient />
					</div>
				</div>
				<div className={s.contentBlock}>
					<div className={s.top}>
						<div className={s.titleWrapper}>
							<h3>Четыре лапы</h3>
							<Badge size='m' color='green'>
								Популярный
							</Badge>
						</div>
						<p className={s.place}>Москва</p>
					</div>
					<div className={s.badges}>
						{badges.map((badge, index) => (
							<Badge key={index} size='xl' color='purple' variant='outline'>
								{badge}
								<CheckIcon />
							</Badge>
						))}
					</div>
					<div className={s.fondContent}>
						<div className={s.textWrapper}>
							<p className={s.descr}>
								Наш благотворительный фонд "Помощь животным" посвящен заботе и поддержке кошек и
								собак. Мы стремимся создать лучшую жизнь для бездомных животных и помочь им найти
								любящие и заботливые дома. В "Помощь животным" мы предлагаем широкий спектр услуг и
								программ, включая пристройство, медицинскую помощь, реабилитацию и социализацию
								бездомных кошек и собак.
							</p>
						</div>
						<div className={s.textWrapper}>
							<div className={s.alert}>
								Наша миссия - не только предоставить краткосрочное убежище для животных, но и помочь
								им адаптироваться и найти постоянные дома, где их ждут забота и любовь.
							</div>
						</div>
						<div className={s.textWrapper}>
							<p className={s.titleSm}>Наша деятельность</p>
							<ul className='list-dots'>
								<li>
									Мы проводим программы по пристройству, где наши волонтеры работают с
									потенциальными владельцами, чтобы найти оптимальные сочетания между животными и
									людьми, обеспечивая успешную адаптацию и долгосрочную гармонию.
								</li>
								<li>
									Мы работаем с опытными волонтерами и ветеринарами, чтобы обеспечить необходимую
									медицинскую помощь и заботу для наших подопечных.
								</li>
								<li>
									Мы проводим образовательные мероприятия и освещаем проблему бездомных животных,
									чтобы повысить осведомленность общества и побудить к добровольным пожертвованиям и
									участию.
								</li>
								<li>
									Мы предоставляем возможности для спонсорства и добровольчества в нашем фонде,
									чтобы каждый мог внести вклад в решение проблемы бездомных кошек и собак.
								</li>
							</ul>
						</div>
						<div className={s.textWrapper}>
							<p className={s.descr}>
								С "Помощь животным" вы можете быть уверены, что ваше пожертвование и участие
								направлены на реальную помощь и изменение жизней незащищенных животных. Мы верим в
								любовь и заботу о кошках и собаках и стремимся создать мир, где каждое животное
								может найти свой дом и быть окруженным заботой и счастьем.
							</p>
						</div>
					</div>
				</div>
			</div>

			<Tabs className={s.tabsContent} value={activeTab} onChange={setActiveTab}>
				<div className={s.tabWrapper}>
					<p className={s.title}>Спонсоры фонда</p>
					<TabList className={s.tabList}>
						<Tab className={s.tabBtn}>Юр.лица</Tab>
						<Tab className={s.tabBtn}>Физ.лица</Tab>
					</TabList>
				</div>

				<TabPanel index={0} className={s.sponsorsWrapper}>
					<div className={s.sponsorsList}>
						{sponsorsList.map((sponsor, index) => (
							<SponsorCard
								key={index}
								title={sponsor.title}
								img={sponsor.img}
								subTitle={sponsor.subTitle}
							/>
						))}
					</div>
					{sponsorsList.length !== sponsors.length ? (
						<Button variant='clear' className={s.showBtn} onClick={() => handleShowAllSponsors()}>
							<DownOutlineArrowIcon />
							Развернуть все {sponsors.length - 4}
						</Button>
					) : null}
				</TabPanel>
				<TabPanel index={1} className={s.sponsorsWrapper}>
					<div className={s.sponsorsList}>
						{sponsorsList.map((sponsor, index) => (
							<SponsorCard
								key={index}
								title={sponsor.title}
								img={sponsor.img}
								subTitle={sponsor.subTitle}
							/>
						))}
					</div>
					{sponsorsList.length !== sponsors2.length ? (
						<Button variant='clear' className={s.showBtn} onClick={() => handleShowAllSponsors()}>
							<DownOutlineArrowIcon />
							Развернуть все {sponsors2.length - 4}
						</Button>
					) : null}
				</TabPanel>
			</Tabs>
		</div>
	);
};
