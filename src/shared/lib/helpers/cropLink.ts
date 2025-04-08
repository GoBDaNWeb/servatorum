export const cropLink = (link: string, id: string | number) => {
	return link.replace(':id', String(id));
};
