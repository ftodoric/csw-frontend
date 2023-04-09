import { Loader } from '@components/Loader'
import { Game } from '@types'

import { GameItem } from './GameItem'
import * as S from './styles'

export const GameList = ({ gameList }: { gameList: Game[] | undefined }) => {
  return (
    <S.GameListContainer>
      <S.ItemWrapper
        style={{
          fontWeight: 'bold',
          borderBottom: 'solid 1px',
          padding: '10px 0',
        }}
      >
        <div id="game-index">No.</div>
        <div>Blue team</div>
        <div>Red team</div>
        <div>Winner</div>
        <div id="game-desc">Description</div>
        <div id="game-link">Link</div>
      </S.ItemWrapper>

      {gameList ? (
        gameList.length !== 0 ? (
          <>
            {gameList.map((game, i) => {
              return (
                <GameItem
                  key={game.id}
                  game={game}
                  index={i}
                  listSize={gameList.length}
                />
              )
            })}
          </>
        ) : (
          <S.EmptyList>You havent play any games.</S.EmptyList>
        )
      ) : (
        <Loader />
      )}
    </S.GameListContainer>
  )
}
