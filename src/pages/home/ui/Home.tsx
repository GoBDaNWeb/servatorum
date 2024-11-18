import { Image } from '@/shared/ui';

import { About } from './about';
import { Advantages } from './advantages';
import { Company } from './company';
import { Donation } from './donation';
import { Gallery } from './gallery';
import { Hero } from './hero';
import s from './home.module.scss';
import { Info } from './info';
import { Subscribe } from './subscribe';
import { Who } from './who';

export const Home = () => {
	return (
		<main className={s.homePage}>
			<Hero />
			<About />
			<Who />
			<Advantages />
			<Info />
			<div className={s.bgWrapper}>
				<Donation />
				<Subscribe />
				<Image paddingBottom='38%' src='/images/home/subscribe/bg.jpg' alt='bg' className={s.bg} />
			</div>
			<Company />
			<Gallery />
		</main>
	);
};
