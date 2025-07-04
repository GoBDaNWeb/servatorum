import { AddBillingModal } from '@/features/modals/add-billing-modal';
import { BillingInfoModal } from '@/features/modals/billing-info-modal';
import { ChangeAccountModal } from '@/features/modals/change-account-modal';
import { ChangeSubscribeModal } from '@/features/modals/change-subscribe-modal';
import { CreateNewsModal } from '@/features/modals/create-news-modal';
import { CreateOrganizationModal } from '@/features/modals/create-organization-modal';
import { CreateRequestModal } from '@/features/modals/create-request-modal';
import { DeleteAccountModal } from '@/features/modals/delete-account-modal';
import { DeleteCardModal } from '@/features/modals/delete-card-modal';
import { DetailsModal } from '@/features/modals/details-modal';
import { DocumentsModal } from '@/features/modals/documents-modal';
import { DonationModal } from '@/features/modals/donation-modal';
import { LeaveReviewModal } from '@/features/modals/leave-review-modal';
import { NewCardModal } from '@/features/modals/new-card-modal';
import { NewsModal } from '@/features/modals/news-modal';
import { RegisterModal } from '@/features/modals/register-modal';
import { ReportModal } from '@/features/modals/report-modal';
import { ServiceModal } from '@/features/modals/service-modal';
import { SubscribeModal } from '@/features/modals/subscribe-modal';
import { SupportFondModal } from '@/features/modals/support-fond-modal';
import { SupportModal } from '@/features/modals/support-modal';

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
			<DetailsModal />
			<ChangeAccountModal />
			<CreateOrganizationModal />
			<ReportModal />
			<SupportModal />
			<CreateRequestModal />
			<BillingInfoModal />
			<AddBillingModal />
			<CreateNewsModal />
		</>
	);
};
