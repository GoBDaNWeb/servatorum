export const convertDate = (date: string, forBack: boolean = true) => {
	if (forBack) {
		const [day, month, year] = date.split('.');
		return `${year}-${month}-${day}`;
	} else {
		const [year, month, day] = date.split('-');
		return `${day}.${month}.${year}`;
	}
};
