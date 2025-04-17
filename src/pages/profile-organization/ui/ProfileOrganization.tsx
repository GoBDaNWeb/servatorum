import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { Button, Image, useModal } from '@/shared/ui';

import { crumbs } from '../config';

import s from './profile-organization.module.scss';

export const ProfileOrganization = () => {
	const { open } = useModal();

	const handleOpenCreateOrganizationModal = () => {
		open('create-organization');
	};
	const handleOpenChangeAccountModal = () => {
		open('change-account');
	};

	return (
		<ProfileWrapper crumbs={crumbs} title='Организации' className={s.profileOrganization}>
			<div className={s.organizationList}>
				<div className={s.organizationCard}>
					<div className={s.top}>
						<div className={s.images}>
							<div className={s.imageWrapper}>
								<Image
									src='/images/organization/2.jpg'
									alt='organization'
									isGradient
									className={s.image}
								/>
							</div>
							<Image
								src='/images/organization/1.jpeg'
								alt='organization'
								isGradient
								className={s.image}
							/>
						</div>
						<p className={s.title}>Хотите создать еще один аккаунт?</p>
					</div>
					<Button variant='primary' onClick={handleOpenCreateOrganizationModal}>
						Создать
					</Button>
				</div>
				<div className={s.organizationCard}>
					<div className={s.top}>
						<div className={s.images}>
							<Image
								src='/images/organization/3.jpg'
								alt='organization'
								isGradient
								className={s.image}
							/>
							<Image
								src='/images/organization/1.jpeg'
								alt='organization'
								isGradient
								className={s.image}
							/>
							<Image
								src='/images/organization/4.jpg'
								alt='organization'
								isGradient
								className={s.image}
							/>
						</div>
						<p className={s.title}>Выбрать аккаунт из имеющихся</p>
					</div>
					<Button variant='default' color='purple' onClick={handleOpenChangeAccountModal}>
						Сменить аккаунт
					</Button>
				</div>
			</div>
		</ProfileWrapper>
	);
};
