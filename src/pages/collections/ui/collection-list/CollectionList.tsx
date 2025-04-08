import { DonationInfo } from '@/features/donation-info';

import { CollectingCard } from '@/entities/collecting-card';

import { Pagination, useModal } from '@/shared/ui';

import s from './collection-list.module.scss';

export const CollectionList = () => {
	const { open } = useModal();

	const handleOpenDonationModal = () => {
		open('donation');
	};

	return (
		<div className={s.collectionListWrapper}>
			<p className={s.total}>1896 сборов</p>
			<div className={s.collectionList}>
				{[...Array(12)].map((_, index) => (
					<CollectingCard
						key={index}
						title='Кошачьему приюту необходимо оборудование которое позволит содержать животных в чистоте и комфорте'
						size='m'
						className={s.collecting}
						imgs={[
							'/images/home/donation/slide.jpg',
							'/images/home/donation/slide2.jpg',
							'/images/home/donation/slide3.jpg'
						]}
						userImg='/images/home/donation/user.jpg'
						userName='Четыре лапы'
						userDate='00.00.0000'
						sum='0'
						total='100 000'
						badgeColor='gold'
						badge={
							<>
								<img src='/images/icons/clock-gold.svg' alt='' />
								<span>31 день</span>
								<p>до завершения</p>
							</>
						}
						isPopular
						hasLink
						donationInfo={<DonationInfo />}
						openDonationModal={handleOpenDonationModal}
					/>
				))}
			</div>
			<Pagination currentPage={1} totalPages={34} onPageChange={page => console.log(page)} />
		</div>
	);
};
