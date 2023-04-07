import { z } from 'zod'

export const newGameFormSchema = z.object({
  blueTeamName: z.string().nonempty(),
  blueGovernmentPlayer: z.string().nonempty(),
  ukPlcPlayer: z.string(),
  electoratePlayer: z.string(),
  gchqPlayer: z.string(),
  ukEnergyPlayer: z.string(),

  redTeamName: z.string().nonempty(),
  redGovernmentPlayer: z.string(),
  energeticBearPlayer: z.string().nonempty(),
  onlineTrollsPlayer: z.string(),
  scsPlayer: z.string(),
  rosenergoatomPlayer: z.string(),

  description: z.string(),
})

export type NewGameFormType = z.infer<typeof newGameFormSchema>

export type NewGameFormResponse = {
  msg: string
}
