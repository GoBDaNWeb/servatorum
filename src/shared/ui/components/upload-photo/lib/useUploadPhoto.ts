import { useState } from 'react';

export const useUploadPhoto = () => {
	const [imageUrl, setImageUrl] = useState<string>('');

	const fileToBase64 = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = error => reject(error);
		});
	};

	const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
		try {
			if (!e.target.files) return;

			const file = e.target.files[0];
			const base64Image = await fileToBase64(file);

			// // Теперь base64Image можно отправить на бэкенд
			// // Пример запроса (замените на ваш API):
			// const response = await fetch('https://your-api.com/upload', {
			//     method: 'POST',
			//     headers: {
			//         'Content-Type': 'application/json',
			//     },
			//     body: JSON.stringify({ image: base64Image }),
			// });

			// if (!response.ok) throw new Error('Ошибка загрузки');

			// const result = await response.json();
			// console.log('Успешно загружено:', result);
			setImageUrl(base64Image); // Если нужно сохранить Base64 в состоянии
		} catch (err) {
			console.error('Ошибка:', err);
			alert('Не удалось загрузить изображение');
		}
	};

	return { handleUploadImage, imageUrl };
};
