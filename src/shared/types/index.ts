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
	| 'add-billing'
	| 'create-news';
export type ModalProps = {
	title?: string;
	data?: any;
	onConfirm?: () => void;
};

export interface IModal {
	currentModal: ModalName | null;
	props: ModalProps;
}

export interface IUserStore {
	userData?: IUser | null;
}
export interface IFondStore {
	fondData?: IFond | null;
}

export interface IFond {
	id?: number;
	name: string;
	description: string;
	logo?: string;
	photo?: string;
	inn: string;
	bik: string;
	cor_account: string;
	address: string;
	address_reg: string;
	phone: string;
	phone_helpdesk: string;
}

export interface IUser {
	id?: number;
	password?: string;
	first_name: string;
	surname: string;
	last_name: string;
	date_of_birth: string;
	gender: string;
	city: string;
	email: string;
	phone: string;
	role: string;
	spheres: number[];
}
export interface IVerifyData {
	user?: IUser;
	access_token?: string;
	refresh_token?: string;
	status: string;
	is_new: boolean;
}

export type VerifyRequest = {
	phone: string;
	code: string;
};

// export interface IVerifyCode {
// 	data?: VerifyData;
// 	error?: VerifyError;
// }

export type UserDirection = 'helping' | 'getting help' | '';

export type Notify = 'error' | 'info' | 'success' | 'warning' | 'default';

export interface ISpehe {
	id: number;
	name: string;
}
