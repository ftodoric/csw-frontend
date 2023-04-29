import Link from 'next/link'

import { primaryColor } from '@colors'
import { IconClose, IconInfo, IconOpen } from '@components/Icons'
import { Game, GameStatus } from '@types'

import * as S from './styles'
import {
  getStatusText,
  handleDescriptionClick,
  handleDescriptionClose,
} from './utils'

export const GameItem = ({
  game,
  index,
  listSize,
}: {
  game: Game
  index: number
  listSize: number
}) => {
  return (
    <>
      <S.ItemWrapper key={game.id}>
        <div id="game-index">#{index + 1}</div>

        <div>{game.blueTeam.name}</div>

        <div>{game.redTeam.name}</div>

        <div>{getStatusText(game.status, game.outcome)}</div>

        <div id={`game-desc`}>
          <div
            id="listener"
            onClick={(event) => handleDescriptionClick(event, index, listSize)}
          >
            <IconInfo width="20px" height="20px" />
          </div>
        </div>

        <div id="game-link">
          <Link href={`/game/${game.id}`}>
            <IconOpen width="20px" />
          </Link>
        </div>
      </S.ItemWrapper>

      <S.DescriptionContainer id={`game-desc-text-${index}`}>
        <div>{game.description ? game.description : 'No description.'}</div>

        <S.DescriptionClose onClick={() => handleDescriptionClose(index)}>
          <IconClose width="20px" fill={primaryColor} />
        </S.DescriptionClose>
      </S.DescriptionContainer>
    </>
  )
}
