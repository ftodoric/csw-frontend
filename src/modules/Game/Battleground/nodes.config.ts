import { EntityType, Game, TeamSide } from '@types'

// Layout everything inside a given scale and use the `fitView` prop to center everything

/**
 * On x axis there are 5 lanes in which entities lie.
 * Entities of the same type are faced against each other in the same lane.
 */
const xLane = {
  1: 0,
  2: 150,
  3: 450,
  4: 750,
  5: 900,
}

/**
 * On y axis there are 6 lanes on which entities lie.
 * Lower three lanes are at the users side,
 * and upper three lanes are for the opposing team.
 */
const yLane = {
  1: 0,
  2: 100,
  3: 150,
  4: 300,
  5: 350,
  6: 450,
}

const commonEntityNodeConfig = {
  type: 'entity',
  draggable: false,
}

export const calculateNodes = (game: Game, userSide: TeamSide) => {
  const isBlueUserSide = userSide === TeamSide.Blue

  const blueEntityMap = {
    [EntityType.People]: {
      x: xLane[4],
      y: isBlueUserSide ? yLane[6] : yLane[1],
    },
    [EntityType.Industry]: {
      x: xLane[2],
      y: isBlueUserSide ? yLane[6] : yLane[1],
    },
    [EntityType.Government]: {
      x: xLane[3],
      y: isBlueUserSide ? yLane[5] : yLane[2],
    },
    [EntityType.Energy]: {
      x: xLane[5],
      y: isBlueUserSide ? yLane[4] : yLane[3],
    },
    [EntityType.Intelligence]: {
      x: xLane[1],
      y: isBlueUserSide ? yLane[4] : yLane[3],
    },
  }

  const redEntityMap = {
    [EntityType.People]: {
      x: xLane[4],
      y: isBlueUserSide ? yLane[1] : yLane[6],
    },
    [EntityType.Industry]: {
      x: xLane[2],
      y: isBlueUserSide ? yLane[1] : yLane[6],
    },
    [EntityType.Government]: {
      x: xLane[3],
      y: isBlueUserSide ? yLane[2] : yLane[5],
    },
    [EntityType.Energy]: {
      x: xLane[5],
      y: isBlueUserSide ? yLane[3] : yLane[4],
    },
    [EntityType.Intelligence]: {
      x: xLane[1],
      y: isBlueUserSide ? yLane[3] : yLane[4],
    },
  }

  return [
    // Blue Side
    {
      id: 'node-electorate',
      ...commonEntityNodeConfig,
      position: blueEntityMap[EntityType.People],
      data: {
        type: EntityType.People,
        side: TeamSide.Blue,
        player: game.blueTeam.peoplePlayer,
        name: 'Electorate',
        userSide,
        isActive: game.activePlayer === 'peoplePlayer' && game.activeSide === TeamSide.Blue,
      },
    },
    {
      id: 'node-ukPlc',
      ...commonEntityNodeConfig,
      position: blueEntityMap[EntityType.Industry],
      data: {
        type: EntityType.Industry,
        side: TeamSide.Blue,
        player: game.blueTeam.industryPlayer,
        name: 'UK PLC',
        userSide,
        isActive: game.activePlayer === 'industryPlayer' && game.activeSide === TeamSide.Blue,
      },
    },
    {
      id: 'node-ukGovernment',
      ...commonEntityNodeConfig,
      position: blueEntityMap[EntityType.Government],
      data: {
        type: EntityType.Government,
        side: TeamSide.Blue,
        player: game.blueTeam.governmentPlayer,
        name: 'UK Government',
        userSide,
        isActive: game.activePlayer === 'governmentPlayer' && game.activeSide === TeamSide.Blue,
      },
    },
    {
      id: 'node-ukEnergy',
      ...commonEntityNodeConfig,
      position: blueEntityMap[EntityType.Energy],
      data: {
        type: EntityType.Energy,
        side: TeamSide.Blue,
        player: game.blueTeam.energyPlayer,
        name: 'UK Energy',
        userSide,
        isActive: game.activePlayer === 'energyPlayer' && game.activeSide === TeamSide.Blue,
      },
    },
    {
      id: 'node-gchq',
      ...commonEntityNodeConfig,
      position: blueEntityMap[EntityType.Intelligence],
      data: {
        type: EntityType.Intelligence,
        side: TeamSide.Blue,
        player: game.blueTeam.intelligencePlayer,
        name: 'GCHQ',
        userSide,
        isActive: game.activePlayer === 'intelligencePlayer' && game.activeSide === TeamSide.Blue,
      },
    },

    // Red Side
    {
      id: 'node-onlineTrolls',
      ...commonEntityNodeConfig,
      position: redEntityMap[EntityType.People],
      data: {
        type: EntityType.People,
        side: TeamSide.Red,
        player: game.redTeam.peoplePlayer,
        name: 'Online Trolls',
        userSide,
        isActive: game.activePlayer === 'peoplePlayer' && game.activeSide === TeamSide.Red,
      },
    },
    {
      id: 'node-energeticBear',
      ...commonEntityNodeConfig,
      position: redEntityMap[EntityType.Industry],
      data: {
        type: EntityType.Industry,
        side: TeamSide.Red,
        player: game.redTeam.industryPlayer,
        name: 'Energetic Bear',
        userSide,
        isActive: game.activePlayer === 'industryPlayer' && game.activeSide === TeamSide.Red,
      },
    },
    {
      id: 'node-russianGovernment',
      ...commonEntityNodeConfig,
      position: redEntityMap[EntityType.Government],
      data: {
        type: EntityType.Government,
        side: TeamSide.Red,
        player: game.redTeam.governmentPlayer,
        name: 'Russian Government',
        userSide,
        isActive: game.activePlayer === 'governmentPlayer' && game.activeSide === TeamSide.Red,
      },
    },
    {
      id: 'node-rosenergoatom',
      ...commonEntityNodeConfig,
      position: redEntityMap[EntityType.Energy],
      data: {
        type: EntityType.Energy,
        side: TeamSide.Red,
        player: game.redTeam.energyPlayer,
        name: 'Rosenergoatom',
        userSide,
        isActive: game.activePlayer === 'energyPlayer' && game.activeSide === TeamSide.Red,
      },
    },
    {
      id: 'node-scs',
      ...commonEntityNodeConfig,
      position: redEntityMap[EntityType.Intelligence],
      data: {
        type: EntityType.Intelligence,
        side: TeamSide.Red,
        player: game.redTeam.intelligencePlayer,
        name: 'SCS',
        userSide,
        isActive: game.activePlayer === 'intelligencePlayer' && game.activeSide === TeamSide.Red,
      },
    },
  ]
}
