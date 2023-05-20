import { z } from 'zod'

export const newGameFormSchema = z.object({
  blueTeamName: z.string().nonempty(),
  electorateUserId: z.string().nonempty(),
  ukPlcUserId: z.string().nonempty(),
  ukGovernmentUserId: z.string().nonempty(),
  ukEnergyUserId: z.string().nonempty(),
  gchqUserId: z.string().nonempty(),

  redTeamName: z.string().nonempty(),
  onlineTrollsUserId: z.string().nonempty(),
  energeticBearUserId: z.string().nonempty(),
  russianGovernmentUserId: z.string().nonempty(),
  rosenergoatomUserId: z.string().nonempty(),
  scsUserId: z.string().nonempty(),

  description: z.string(),
})

export type NewGameFormType = z.infer<typeof newGameFormSchema>

export type NewGameFormResponse = {
  msg: string
}
