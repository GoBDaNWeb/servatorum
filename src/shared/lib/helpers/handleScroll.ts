export const handleScroll = (id: string) => {
	const currentLink = document.querySelector(id) as HTMLElement | null;
	if (currentLink) {
		window.scrollTo({
			top: currentLink.offsetTop,
			left: 0,
			behavior: 'smooth'
		});
	}
};
