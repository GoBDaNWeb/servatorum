import { DeleteAccountModal } from '@/features/delete-account-modal';
import { DocumentsModal } from '@/features/documents-modal/ui/DocumentsModal';
import { DonationModal } from '@/features/donation-modal';
import { RegisterModal } from '@/features/register-modal';
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
		</>
	);
};
