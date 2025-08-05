export const formatPhone = (phone: string, widthPlus: boolean = true): string => {
	let cleanedPhone: string;

	if (widthPlus) {
		cleanedPhone = phone.replace(/[^+0-9]/g, '');
	} else {
		cleanedPhone = phone.replace(/[^0-9]/g, '');
	}

	cleanedPhone = '7' + cleanedPhone.slice(1);

	cleanedPhone = cleanedPhone.slice(0, 11);

	return cleanedPhone;
};
