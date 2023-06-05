import { z } from 'zod'

export const activateAssetFormSchema = z.object({
  attackVectorTarget: z.string().optional(),
  softwareUpdateTarget: z.string().optional(),
  networkPolicyTarget: z.string().optional(),
  cyberInvestmentProgrammeTarget: z.string().optional(),
  ransomwareAttacker: z.string().optional(),
})

export type ActivateAssetFormInputs = z.infer<typeof activateAssetFormSchema>
