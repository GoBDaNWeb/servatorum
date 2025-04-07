import { useEffect } from 'react';

export const useLockedBody = (locked = false) => {
	useEffect(() => {
		if (!locked) {
			return;
		}

		const header = document.querySelector('#header') as HTMLElement;
		const originalOverflow = document.body.style.overflow;
		const originalPaddingRight = document.body.style.paddingRight;
		const originalHeaderPaddingRight = header?.style.paddingRight || '';
		const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

		document.body.style.paddingRight = `${scrollBarWidth}px`;
		if (header) header.style.paddingRight = `${scrollBarWidth}px`;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = originalOverflow;
			document.body.style.paddingRight = originalPaddingRight;
			if (header) header.style.paddingRight = originalHeaderPaddingRight;
		};
	}, [locked]);
};
