import { useEffect } from 'react';

export const useLockedBody = (locked = false) => {
	useEffect(() => {
		if (!locked) {
			return;
		}
		const header = document.querySelector('#header') as HTMLElement;
		const originalOverflow = document.body.style.overflow;
		const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

		document.body.style.paddingRight = `${scrollBarWidth}px`;
		if (header) header.style.paddingRight = `${scrollBarWidth}px`;
		// Lock body scroll
		document.body.style.overflow = 'hidden';

		return () => {
			setTimeout(() => {
				document.body.style.overflow = originalOverflow;
				if (header) header.style.paddingRight = '0px';

				document.body.style.paddingRight = '0px';
			}, 200);
		};
	}, [locked]);
};
