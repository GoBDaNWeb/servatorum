import { FC, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import { useFileUpload } from '@/shared/lib';
import {
	Button,
	CarouselIcon,
	GridIcon,
	Swiper,
	Tab,
	TabList,
	TabPanel,
	Tabs,
	UploadFile,
	UploadedPhoto
} from '@/shared/ui';

import s from './request-photo.module.scss';

interface IRequestPhoto {
	nextStep: () => void;
}

export const RequestPhoto: FC<IRequestPhoto> = ({ nextStep }) => {
	const [activeTab, setActiveTab] = useState(0);
	const { files, handleFileSelect, removeFile } = useFileUpload();

	const handleRemoveFile = (id: string) => {
		removeFile(id);
	};

	return (
		<div className={s.requestPhoto}>
			<div className={s.mainContent}>
				<p className={s.title}>Добавить фото</p>
				<p className={s.descr}>
					Это необходимо для формирования карточки сбора. Оптимальное кол-во 4-6 фотографий
				</p>
				{files.length ? (
					<Tabs className={s.tabsContent} value={activeTab} onChange={setActiveTab}>
						<div className={s.tabWrapper}>
							<TabList className={s.tabList}>
								<Tab className={`${s.tabBtn} ${activeTab === 0 ? s.active : ''}`}>
									<GridIcon />
									Сетка
								</Tab>
								<Tab className={`${s.tabBtn} ${activeTab === 1 ? s.active : ''}`}>
									<CarouselIcon />
									Карусель
								</Tab>
							</TabList>
						</div>
						<div className={s.tabPannelWrapper}>
							<TabPanel index={0} className={s.tabPanel}>
								<div className={s.grid}>
									{files.map(file => (
										<UploadedPhoto
											key={file.id}
											handleRemoveFile={() => handleRemoveFile(file.id)}
										/>
									))}
								</div>
							</TabPanel>
							<TabPanel index={1} className={s.tabPanel}>
								<Swiper slidesPerView={1.3} spaceBetween={15} className={s.swiper}>
									{files.map(file => (
										<SwiperSlide key={file.id}>
											<UploadedPhoto
												key={file.id}
												handleRemoveFile={() => handleRemoveFile(file.id)}
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</TabPanel>
						</div>
					</Tabs>
				) : null}
			</div>
			<div className={s.btns}>
				<UploadFile handleUploadFile={handleFileSelect} allowedTypes={['image/*']} />
				<Button variant='primary' onClick={nextStep} isDisabled={!files.length}>
					Продолжить
				</Button>
			</div>
		</div>
	);
};
