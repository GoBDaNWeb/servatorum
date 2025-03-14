export const cropLink = (link: string, id: string | number) => {
	const resultLink = link.replace(':id', '');
	return resultLink + id;
};
