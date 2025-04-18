import { ChangeEvent, useCallback, useState } from 'react';

interface UploadedFile {
	id: string;
	name: string;
	uploadDate: string;
	file: File;
}

interface UseFileUploadReturn {
	files: UploadedFile[];
	handleFileSelect: (event: ChangeEvent<HTMLInputElement>) => void;
	clearFiles: () => void;
	removeFile: (fileId: string) => void;
}

export const useFileUpload = (): UseFileUploadReturn => {
	const [files, setFiles] = useState<UploadedFile[]>([]);

	const handleFileSelect = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files;
		if (!selectedFiles) return;

		const newFiles = Array.from(selectedFiles).map(file => ({
			id: Math.random().toString(36).substr(2, 9),
			name: file.name,
			uploadDate: new Date().toLocaleString(),
			file
		}));

		setFiles(prev => [...prev, ...newFiles]);
		event.target.value = ''; // Сбрасываем значение input для возможности повторной загрузки тех же файлов
	}, []);

	const clearFiles = useCallback(() => setFiles([]), []);

	const removeFile = useCallback((fileId: string) => {
		setFiles(prev => prev.filter(file => file.id !== fileId));
	}, []);

	return { files, handleFileSelect, clearFiles, removeFile };
};
