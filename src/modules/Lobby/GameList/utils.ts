import { MouseEvent } from 'react'

import { getWinnerText } from '@modules/Game/utils'
import { GameOutcome, GameStatus } from '@types'

export const handleDescriptionClick = (event: MouseEvent, index: number, listSize: number) => {
  let gameDescription

  // Close all open descriptions
  for (let i = 0; i < listSize; i++) {
    gameDescription = document.getElementById(`game-desc-text-${i}`)
    if (gameDescription) {
      gameDescription.style.display = 'none'
    }
  }

  gameDescription = document.getElementById(`game-desc-text-${index}`)

  if (gameDescription) {
    gameDescription.style.display = 'flex'
    gameDescription.style.left = `${event.clientX}px`
    gameDescription.style.top = `${event.clientY}px`
  }
}

export const handleDescriptionClose = (index: number) => {
  const gameDescription = document.getElementById(`game-desc-text-${index}`)

  if (gameDescription) {
    gameDescription.style.display = 'none'
  }
}

export const getStatusText = (gameStatus: GameStatus, gameOutcome?: GameOutcome) => {
  switch (gameStatus) {
    case GameStatus.NotStarted:
      return 'Not started'
    case GameStatus.InProgress:
      return 'In progress'
    case GameStatus.Paused:
      return 'Paused'
    case GameStatus.Finished:
      if (gameOutcome) return getWinnerText(gameOutcome)
  }
}
