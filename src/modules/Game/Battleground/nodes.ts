import { EntityType, Game, TeamSide } from '@types'

export const calculateNodes = (game: Game, userSide: TeamSide) => {
  const isBlueUserSide = userSide === TeamSide.Blue

  // Layout everything inside a given scale and use the `fitView` prop to center everything

  const blueEntityMap = {
    [EntityType.People]: {
      x: 750,
      y: isBlueUserSide ? 450 : 0,
    },
    [EntityType.Industry]: {
      x: 150,
      y: isBlueUserSide ? 450 : 0,
    },
    [EntityType.Government]: {
      x: 450,
      y: isBlueUserSide ? 350 : 100,
    },
    [EntityType.Energy]: {
      x: 900,
      y: isBlueUserSide ? 300 : 150,
    },
    [EntityType.Intelligence]: {
      x: 0,
      y: isBlueUserSide ? 300 : 150,
    },
  }

  const redEntityMap = {
    [EntityType.People]: {
      x: 750,
      y: isBlueUserSide ? 0 : 450,
    },
    [EntityType.Industry]: {
      x: 150,
      y: isBlueUserSide ? 0 : 450,
    },
    [EntityType.Government]: {
      x: 450,
      y: isBlueUserSide ? 100 : 350,
    },
    [EntityType.Energy]: {
      x: 900,
      y: isBlueUserSide ? 150 : 300,
    },
    [EntityType.Intelligence]: {
      x: 0,
      y: isBlueUserSide ? 150 : 300,
    },
  }

  return [
    {
      id: 'node-electorate',
      type: 'entity',
      data: {
        type: EntityType.People,
        side: TeamSide.Blue,
        player: game.blueTeam.peoplePlayer,
        name: 'Electorate',
        userSide,
        isActive: game.activePlayer === 'peoplePlayer' && game.activeSide === TeamSide.Blue,
      },
      position: blueEntityMap[EntityType.People],
      draggable: false,
    },
    {
      id: 'node-ukPlc',
      type: 'entity',
      data: {
        type: EntityType.Industry,
        side: TeamSide.Blue,
        player: game.blueTeam.industryPlayer,
        name: 'UK PLC',
        userSide,
        isActive: game.activePlayer === 'industryPlayer' && game.activeSide === TeamSide.Blue,
      },
      position: blueEntityMap[EntityType.Industry],
      draggable: false,
    },
    {
      id: 'node-ukGovernment',
      type: 'entity',
      data: {
        type: EntityType.Government,
        side: TeamSide.Blue,
        player: game.blueTeam.governmentPlayer,
        name: 'UK Government',
        userSide,
        isActive: game.activePlayer === 'governmentPlayer' && game.activeSide === TeamSide.Blue,
      },
      position: blueEntityMap[EntityType.Government],
      draggable: false,
    },
    {
      id: 'node-ukEnergy',
      type: 'entity',
      data: {
        type: EntityType.Energy,
        side: TeamSide.Blue,
        player: game.blueTeam.energyPlayer,
        name: 'UK Energy',
        userSide,
        isActive: game.activePlayer === 'energyPlayer' && game.activeSide === TeamSide.Blue,
      },
      position: blueEntityMap[EntityType.Energy],
      draggable: false,
    },
    {
      id: 'node-gchq',
      type: 'entity',
      data: {
        type: EntityType.Intelligence,
        side: TeamSide.Blue,
        player: game.blueTeam.intelligencePlayer,
        name: 'GCHQ',
        userSide,
        isActive: game.activePlayer === 'intelligencePlayer' && game.activeSide === TeamSide.Blue,
      },
      position: blueEntityMap[EntityType.Intelligence],
      draggable: false,
    },

    // Russian side
    {
      id: 'node-onlineTrolls',
      type: 'entity',
      data: {
        type: EntityType.People,
        side: TeamSide.Red,
        player: game.redTeam.peoplePlayer,
        name: 'Online Trolls',
        userSide,
        isActive: game.activePlayer === 'peoplePlayer' && game.activeSide === TeamSide.Red,
      },
      position: redEntityMap[EntityType.People],
      draggable: false,
    },
    {
      id: 'node-energeticBear',
      type: 'entity',
      data: {
        type: EntityType.Industry,
        side: TeamSide.Red,
        player: game.redTeam.industryPlayer,
        name: 'Energetic Bear',
        userSide,
        isActive: game.activePlayer === 'industryPlayer' && game.activeSide === TeamSide.Red,
      },
      position: redEntityMap[EntityType.Industry],
      draggable: false,
    },
    {
      id: 'node-russianGovernment',
      type: 'entity',
      data: {
        type: EntityType.Government,
        side: TeamSide.Red,
        player: game.redTeam.governmentPlayer,
        name: 'Russian Government',
        userSide,
        isActive: game.activePlayer === 'governmentPlayer' && game.activeSide === TeamSide.Red,
      },
      position: redEntityMap[EntityType.Government],
      draggable: false,
    },
    {
      id: 'node-rosenergoatom',
      type: 'entity',
      data: {
        type: EntityType.Energy,
        side: TeamSide.Red,
        player: game.redTeam.energyPlayer,
        name: 'Rosenergoatom',
        userSide,
        isActive: game.activePlayer === 'energyPlayer' && game.activeSide === TeamSide.Red,
      },
      position: redEntityMap[EntityType.Energy],
      draggable: false,
    },
    {
      id: 'node-scs',
      type: 'entity',
      data: {
        type: EntityType.Intelligence,
        side: TeamSide.Red,
        player: game.redTeam.intelligencePlayer,
        name: 'SCS',
        userSide,
        isActive: game.activePlayer === 'intelligencePlayer' && game.activeSide === TeamSide.Red,
      },
      position: redEntityMap[EntityType.Intelligence],
      draggable: false,
    },
  ]
}
