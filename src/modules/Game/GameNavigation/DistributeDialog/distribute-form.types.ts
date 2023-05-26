import { z } from 'zod'

import { MAX_NUMBER_OF_RESOURCE_PER_TRANSFER } from '@modules/Game/config'

export const distributeFormSchema = z.object({
  targetPlayerId: z.string(),
  resourceAmount: z.number().max(MAX_NUMBER_OF_RESOURCE_PER_TRANSFER),
})

export type DistributeFormInputs = z.infer<typeof distributeFormSchema>
