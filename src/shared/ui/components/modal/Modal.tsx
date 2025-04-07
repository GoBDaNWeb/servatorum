import { FC, PropsWithChildren, ReactElement, forwardRef, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import clsx from 'clsx';

import { useLockedBody } from '@/shared/lib';

import { Portal } from '../portal';

import s from './modal.module.scss';
import './modal.scss';

interface IModal {
	isOpen: boolean;
	className?: string;
	close: () => void;
	contentTop: ReactElement;
}

export const Modal: FC<PropsWithChildren<IModal>> = forwardRef(
	({ isOpen, className, children, close, contentTop }, ref) => {
		useLockedBody(isOpen);
		const nodeRef = useRef<HTMLDivElement | null>(null);
		const modalClass = clsx(s.modal, className, 'modal');
		const modalContentClass = clsx(s.modalContentWrapper, 'modal-content');

		return (
			<Portal rootId='#modal'>
				<CSSTransition
					classNames='modal'
					unmountOnExit
					in={isOpen}
					timeout={{
						exit: 300,
						enter: 0
					}}
					nodeRef={nodeRef}
				>
					<div
						className={modalClass}
						onClick={close}
						ref={el => {
							nodeRef.current = el; // Присваиваем ref элементу
							if (typeof ref === 'function') {
								ref(el); // Передаем ref в родительский компонент
							} else if (ref) {
								ref.current = el;
							}
						}}
					>
						<div className={modalContentClass} onClick={e => e.stopPropagation()}>
							<div className={s.modalContentTop}>{contentTop}</div>
							<div className={s.modalContent}>{children}</div>
						</div>
					</div>
				</CSSTransition>
			</Portal>
		);
	}
);
Modal.displayName = 'Modal';
