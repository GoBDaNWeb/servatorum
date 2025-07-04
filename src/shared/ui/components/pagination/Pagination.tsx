import { FC } from 'react';

import clsx from 'clsx';

import { BackOutlineArrow, NextOutlineArrow } from '../../icons';
import { Button } from '../button';

import s from './pagination.module.scss';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	variant?: 'default' | 'inner';
	className?: string;
}

export const Pagination: FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
	variant = 'default',
	className
}) => {
	const getPageNumbers = () => {
		const pages: (number | string)[] = [];
		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			pages.push(1);
			if (currentPage > 6) pages.push('...');
			for (
				let i = Math.max(2, currentPage - 4);
				i <= Math.min(totalPages - 1, currentPage + 4);
				i++
			) {
				pages.push(i);
			}
			if (currentPage < totalPages - 5) pages.push('...');
			pages.push(totalPages);
		}
		return pages;
	};

	const paginationClass = clsx(s.pagination, s[variant], className);

	return (
		<div className={paginationClass}>
			<Button
				className={s.navBtn}
				isDisabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
				ariaLabel='Кнопка пагинации назад'
			>
				<BackOutlineArrow />
			</Button>
			<div className={s.pages}>
				{getPageNumbers().map((page, index) => (
					<Button
						className={s.pageBtn}
						key={index}
						onClick={() => typeof page === 'number' && onPageChange(page)}
						isDisabled={typeof page !== 'number'}
					>
						{page}
					</Button>
				))}
			</div>

			<Button
				className={s.navBtn}
				isDisabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
				ariaLabel='Кнопка пагинации вперед'
			>
				<NextOutlineArrow />
			</Button>
		</div>
	);
};
