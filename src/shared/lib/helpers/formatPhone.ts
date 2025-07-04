export const formatPhone = (phone: string, widthPlus: boolean = true): string => {
	if (widthPlus) {
		return phone.replace(/[^+0-9]/g, '');
	} else {
		return phone.replace(/[^0-9]/g, '');
	}
};
