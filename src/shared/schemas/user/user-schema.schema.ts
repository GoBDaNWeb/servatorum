import { z } from 'zod';

export const userSchema = z.object({
	first_name: z
		.string()
		.min(1)
		.regex(/^[A-Za-zА-Яа-яЁё]*$/),
	surname: z
		.string()
		.min(1)
		.regex(/^[A-Za-zА-Яа-яЁё]*$/),
	last_name: z
		.string()
		.min(1)
		.regex(/^[A-Za-zА-Яа-яЁё]*$/),
	city: z.string().min(1),
	gender: z.string(),
	date_of_birth: z.string().min(10, 'Дата рождения обязательна'),
	phone: z.string().min(11, 'Номер телефона обязателен'),
	email: z.string().email('Неверный формат email').min(1, 'Email обязателен'),
	role: z.string(),
	profile_picture: z.string()
});

export type TypeUserSchema = z.infer<typeof userSchema>;
