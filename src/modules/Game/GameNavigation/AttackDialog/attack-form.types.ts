import { z } from 'zod'

import { MAX_AMOUNT_OF_RESOURCE_FOR_ATTACK } from '@modules/Game/config'

export const attackFormSchema = z.object({
  resourceAmount: z.number().max(MAX_AMOUNT_OF_RESOURCE_FOR_ATTACK),
})

export type AttackFormInputs = z.infer<typeof attackFormSchema>
