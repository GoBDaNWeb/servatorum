import { FC, PropsWithChildren, ReactElement, forwardRef, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import clsx from 'clsx';

import { useLockedBody } from '@/shared/lib';
import { Portal } from '@/shared/ui';

import s from './modal.module.scss';
import './modal.scss';

interface IModal {
	isOpen: boolean;
	className?: string;
	contentClassName?: string;
	contentWrapperClassName?: string;
	close: () => void;
	contentTop: ReactElement;
}

export const Modal: FC<PropsWithChildren<IModal>> = forwardRef(
	(
		{ isOpen, className, children, close, contentTop, contentClassName, contentWrapperClassName },
		ref
	) => {
		useLockedBody(isOpen);
		const nodeRef = useRef<HTMLDivElement | null>(null);

		const classes = {
			modal: clsx(s.modal, className, 'modal'),
			wrapper: clsx(s.modalContentWrapper, contentWrapperClassName, 'modal-content-wrapper'),
			content: clsx(s.modalContent, contentClassName, 'modal-content')
		};

		const handleRef = (el: HTMLDivElement | null) => {
			nodeRef.current = el;
			if (typeof ref === 'function') ref(el);
			else if (ref) ref.current = el;
		};

		return (
			<Portal rootId='#modal'>
				<CSSTransition
					classNames='modal'
					unmountOnExit
					in={isOpen}
					timeout={{ exit: 300, enter: 0 }}
					nodeRef={nodeRef}
				>
					<div className={classes.modal} onClick={close} ref={handleRef}>
						<div className={classes.wrapper} onClick={e => e.stopPropagation()}>
							<div className={s.modalContentTop}>{contentTop}</div>
							<div className={classes.content}>{children}</div>
						</div>
					</div>
				</CSSTransition>
			</Portal>
		);
	}
);
Modal.displayName = 'Modal';
