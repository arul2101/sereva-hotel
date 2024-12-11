import { z } from 'zod';

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
)

export const loginSchema = z.object({
  email: z.string({ required_error: 'Email address cannot blank!' }).email({ message: 'Email is not valid' }),
  password: z.string({ required_error: "Password cannot blank" }).min(8, 'Password at least minimal 8 characters!')
});

export const registerSchema = z.object({
  fullName: z
    .string({ required_error: "Full Name cannot blank" })
    .min(8, 'Full Name at least minimal 8 characters!'),
  email: z
    .string({ required_error: 'Email address cannot blank!' })
    .email({ message: 'Email is not valid' }),
  password: z
    .string({ required_error: "Password cannot blank" })
    .min(8, "Password at least minimal 8 characters!")
    .regex(passwordValidation, {
      message: "Password harus berisi setidaknya 1 Huruf Kapital, 1 Huruf Kecil, 1 Angka dan 1 Special Karakter!"
    }),
  repeatPassword: z
    .string({ required_error: "Confirm Password cannot blank" })
    .min(8, "Confirm Password at least minimal 8 characters!")
    .regex(passwordValidation, {
      message: "Password harus berisi setidaknya 1 Huruf Kapital, 1 Huruf Kecil, 1 Angka dan 1 Special Karakter!"
    }),
}).refine((data) => data.password === data.repeatPassword, {
  message: "Password not same!",
  path: ["repeatPassword"],
});