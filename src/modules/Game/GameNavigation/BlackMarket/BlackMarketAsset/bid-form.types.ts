import { z } from 'zod'

export const bidFormSchema = z.object({
  bid: z.number(),
})

export type BidFormInputs = z.infer<typeof bidFormSchema>
