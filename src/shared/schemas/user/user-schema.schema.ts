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
	date_of_birth: z.string(),
	phone: z.string(),
	email: z.string().email(),
	role: z.string(),
	profile_picture: z.string()
});

export type TypeUserSchema = z.infer<typeof userSchema>;
