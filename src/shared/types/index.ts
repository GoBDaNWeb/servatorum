export type ModalName =
	| 'news'
	| 'delete-account'
	| 'documents'
	| 'donation'
	| 'register'
	| 'subscribe'
	| 'support-fond'
	| 'service'
	| 'leave-review'
	| 'change-subscribe'
	| 'delete-card'
	| 'new-card'
	| 'details'
	| 'create-organization'
	| 'change-account'
	| 'report'
	| 'support'
	| 'create-request'
	| 'billing-info'
	| 'add-billing';
export type ModalProps = {
	title?: string;
	data?: any;
	onConfirm?: () => void;
};

export interface IModal {
	currentModal: ModalName | null;
	props: ModalProps;
}
