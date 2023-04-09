import { z } from 'zod'

export const newGameFormSchema = z.object({
  blueTeamName: z.string().nonempty(),
  electoratePlayer: z.string().nonempty(),
  ukPlcPlayer: z.string().nonempty(),
  ukGovernmentPlayer: z.string().nonempty(),
  ukEnergyPlayer: z.string().nonempty(),
  gchqPlayer: z.string().nonempty(),

  redTeamName: z.string().nonempty(),
  onlineTrollsPlayer: z.string().nonempty(),
  energeticBearPlayer: z.string().nonempty(),
  russianGovernmentPlayer: z.string().nonempty(),
  rosenergoatomPlayer: z.string().nonempty(),
  scsPlayer: z.string().nonempty(),

  description: z.string(),
})

export type NewGameFormType = z.infer<typeof newGameFormSchema>

export type NewGameFormResponse = {
  msg: string
}
