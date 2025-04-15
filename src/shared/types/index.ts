export type ModalName =
	| 'news'
	| 'delete-account'
	| 'documents'
	| 'donation'
	| 'register'
	| 'subscribe'
	| 'support-fond'
	| 'service';
export type ModalProps = {
	title?: string;
	data?: any;
	onConfirm?: () => void;
};

export interface IModal {
	currentModal: ModalName | null;
	props: ModalProps;
}
