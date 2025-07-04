import { toast } from 'react-toastify';

import { Notify } from '@/shared/types';

export const notify = (notifyText: string, notifyType: Notify) => {
	switch (notifyType) {
		case 'success':
			toast.success(notifyText, { position: 'bottom-right', autoClose: 1500 });
			break;
		case 'error':
			toast.error(notifyText, { position: 'bottom-right', autoClose: 1500 });
			break;
		case 'info':
			toast.info(notifyText, { position: 'bottom-right', autoClose: 1500 });
			break;
		case 'warning':
			toast.warn(notifyText, { position: 'bottom-right', autoClose: 1500 });
			break;
		default:
			toast(notifyText, { position: 'bottom-right', autoClose: 1500 });
	}
};
