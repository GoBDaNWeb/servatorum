import { ChangeSubscribeModal } from '@/features/change-subscribe-modal';
import { DeleteAccountModal } from '@/features/delete-account-modal';
import { DocumentsModal } from '@/features/documents-modal';
import { DonationModal } from '@/features/donation-modal';
import { LeaveReviewModal } from '@/features/leave-review-modal';
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
		</>
	);
};
