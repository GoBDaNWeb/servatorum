import { ChangeSubscribeModal } from '@/features/change-subscribe-modal';
import { DeleteAccountModal } from '@/features/delete-account-modal';
import { DeleteCardModal } from '@/features/delete-card-modal';
import { DocumentsModal } from '@/features/documents-modal';
import { DonationModal } from '@/features/donation-modal';
import { LeaveReviewModal } from '@/features/leave-review-modal';
import { NewCardModal } from '@/features/new-card-modal';
import { NewsModal } from '@/features/news-modal';
import { RegisterModal } from '@/features/register-modal';
import { ServiceModal } from '@/features/service-modal';
import { SubscribeModal } from '@/features/subscribe-modal';
import { SupportFondModal } from '@/features/support-fond-modal';

export const Modals = () => {
	return (
		<>
			<RegisterModal />
			<DocumentsModal />
			<DonationModal />
			<SupportFondModal />
			<SubscribeModal />
			<DeleteAccountModal />
			<NewsModal />
			<ServiceModal />
			<LeaveReviewModal />
			<ChangeSubscribeModal />
			<DeleteCardModal />
			<NewCardModal />
		</>
	);
};
