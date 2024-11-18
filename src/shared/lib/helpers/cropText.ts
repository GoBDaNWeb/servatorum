export const cropText = (text: string, maxLength: number): string => {
	if (text.length > maxLength) {
		return (
			text
				.split(' ')
				.slice(0, maxLength / 5)
				.join(' ') + '...'
		);
	}
	return text;
};
