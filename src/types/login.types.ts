import { z } from 'zod'

export const loginFormSchema = z.object({
  username: z
    .string()
    .min(2, 'Username must contain at least 2 characters.')
    .max(20),
  password: z
    .string()
    .min(2, 'Password must contain at least 2 characters.')
    .max(32),
})

export type LoginFormInputs = z.infer<typeof loginFormSchema>

export type LoginResponse = {
  msg: string
}
