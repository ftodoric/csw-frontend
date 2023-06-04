import { z } from 'zod'

export const activateAssetFormSchema = z.object({
  attackVectorTarget: z.string().optional(),
})

export type ActivateAssetFormInputs = z.infer<typeof activateAssetFormSchema>
