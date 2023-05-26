import { z } from 'zod'

import { MAX_AMOUNT_OF_REVITALISATION } from '@modules/Game/config'

export const revitaliseFormSchema = z.object({
  revitalizationAmount: z.number().min(1).max(MAX_AMOUNT_OF_REVITALISATION),
})

export type RevitaliseFormInputs = z.infer<typeof revitaliseFormSchema>
