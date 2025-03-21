import { FC, ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

// Удобная библиотека для объединения классов
import s from './tabs.module.scss';

const TabsContext = createContext<{
	activeTab: number;
	setActiveTab: (index: number) => void;
}>({
	activeTab: 0,
	setActiveTab: () => {}
});
interface ITabs {
	children: ReactNode;
	className?: string;
	value?: number;
	onChange?: (index: number) => void;
}
export const Tabs: FC<ITabs> = ({ children, className, value, onChange }) => {
	const [internalActiveTab, setInternalActiveTab] = useState(0);

	const isControlled = value !== undefined && onChange !== undefined;
	const activeTab = isControlled ? value : internalActiveTab;

	const handleSetActiveTab = (index: number) => {
		if (isControlled) {
			onChange?.(index);
		} else {
			setInternalActiveTab(index);
		}
	};

	const tabsClass = clsx(s.tabsContainer, className);

	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab: handleSetActiveTab }}>
			<div className={tabsClass}>{children}</div>
		</TabsContext.Provider>
	);
};
export const TabList: FC<{ children: ReactNode[]; className?: string }> = ({
	children,
	className
}) => {
	const { activeTab, setActiveTab } = useContext(TabsContext);
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const togglerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const activeTabRef = tabRefs.current[activeTab];

		if (activeTabRef && togglerRef.current) {
			togglerRef.current.style.left = `${activeTabRef.offsetLeft}px`;
			togglerRef.current.style.width = `${activeTabRef.offsetWidth}px`;
			if (activeTab === 0) {
				togglerRef.current.style.left = `4px`;
				togglerRef.current.style.width = '${activeTabRef.offsetWidth}px';
				return;
			}
		}
	}, [activeTab, children]);

	const tabListClass = clsx(s.tabList, className);

	return (
		<div className={tabListClass}>
			{children.map((child, index) =>
				child ? (
					<button
						key={index}
						ref={el => (tabRefs.current[index] = el)}
						className={s.tab}
						onClick={() => setActiveTab(index)}
					>
						{child}
					</button>
				) : null
			)}
			<div className={s.toggler} ref={togglerRef}></div>
		</div>
	);
};

interface ITab {
	children: ReactNode;
	className?: string;
}

export const Tab: FC<ITab> = ({ children, className }) => {
	return <span className={clsx(className)}>{children}</span>;
};

interface ITabPanel {
	children: ReactNode;
	index: number;
	className?: string;
}

export const TabPanel: FC<ITabPanel> = ({ children, index, className }) => {
	const { activeTab } = useContext(TabsContext);
	return activeTab === index ? <div className={clsx(s.tabPanel, className)}>{children}</div> : null;
};
