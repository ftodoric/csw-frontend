import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

import { IconAbstain, IconAttack, IconBlackMarket, IconDistribute, IconRevitalise } from '@components/Icons'
import { useMakeGameAction, useUserContext } from '@hooks'
import { GameAction, GameNavigationClick, GamePeriod, GameStatus, PlayerType, TeamSide } from '@types'

import { AttackDialog } from './AttackDialog'
import { BlackMarket } from './BlackMarket'
import { DistributeDialog } from './DistributeDialog'
import { RevitaliseDialog } from './RevitaliseDialog'
import * as S from './styles'
import { InventoryButton, TeamInventory } from './TeamInventory'
import { removePlayer, useGameActionContext } from '../context/GameActionContext'
import { useGameContext } from '../context/GameContext'
import { getWinnerText } from '../utils'

interface NavigationProps {
  userSide: TeamSide
  isOwner: boolean
}

export const GameNavigation = ({ userSide, isOwner }: NavigationProps) => {
  const { user } = useUserContext()
  const { id: userId } = user!

  const { game } = useGameContext()
  const {
    id: gameId,
    status: gameStatus,
    activeSide,
    outcome,
    isRussianGovernmentAttacked,
    isRosenergoatomAttacked,
    isUkEnergyAttacked,
    activePeriod,
  } = game!

  const queryClient = useQueryClient()
  const makeGameAction = useMakeGameAction(gameId)

  const { state, dispatch } = useGameActionContext()
  const { selectedPlayer } = state

  const [areActionsAvailable, setActionsAvailable] = useState(true)
  const [areNavigationButtonsDisabled, setNavigationButtonsDisabled] = useState(true)
  const [hasMadeBid, setHasMadeBid] = useState(false)
  const [isParalyzed, setParalyzed] = useState(false)

  const [isDistributeDialogOpen, setDistributeDialogOpen] = useState(false)
  const [isRevitaliseDialogOpen, setRevitaliseDialogOpen] = useState(false)
  const [isAttackDialogOpen, setAttackDialogOpen] = useState(false)
  const [isBlackMarketOpen, setBlackMarketOpen] = useState(false)
  const [isInventoryOpen, setInventoryOpen] = useState(false)

  useEffect(() => {
    if (selectedPlayer) {
      if (selectedPlayer.user.id === userId) {
        setActionsAvailable(false)
      }

      if (!selectedPlayer.hasMadeAction) {
        setNavigationButtonsDisabled(false)
      } else setNavigationButtonsDisabled(true)

      if (selectedPlayer.paralysisRemainingTurns > 0) {
        setParalyzed(true)
      } else {
        setParalyzed(false)
      }

      setHasMadeBid(selectedPlayer.hasMadeBid)
    } else setActionsAvailable(true)
  }, [userId, game, selectedPlayer])

  const handleGameAction = (gameAction: GameNavigationClick) => {
    switch (gameAction) {
      case GameNavigationClick.DISTRIBUTE:
        setDistributeDialogOpen(true)
        break

      case GameNavigationClick.REVITALISE:
        setRevitaliseDialogOpen(true)
        break

      case GameNavigationClick.ATTACK:
        setAttackDialogOpen(true)
        break

      case GameNavigationClick.ACCESS_BLACK_MARKET:
        setBlackMarketOpen(true)
        break

      case GameNavigationClick.ABSTAIN:
        makeGameAction.mutate({ actionType: GameAction.ABSTAIN, payload: { entityPlayer: selectedPlayer } })
        dispatch(removePlayer())

      default:
        break
    }
  }

  const isOnlineTrolls = selectedPlayer?.side === TeamSide.Red && selectedPlayer?.type === PlayerType.People
  const isYourTurn = userSide === TeamSide.Blue ? activeSide === TeamSide.Blue : activeSide === TeamSide.Red

  // List of entities that have a possibility of an attack
  const isAttackPossible =
    (selectedPlayer?.side === TeamSide.Blue && selectedPlayer.type === PlayerType.Government) ||
    (selectedPlayer?.side === TeamSide.Blue && selectedPlayer.type === PlayerType.Intelligence) ||
    (selectedPlayer?.side === TeamSide.Red && selectedPlayer.type === PlayerType.People) ||
    (selectedPlayer?.side === TeamSide.Red && selectedPlayer.type === PlayerType.Industry) ||
    (selectedPlayer?.side === TeamSide.Red && selectedPlayer.type === PlayerType.Intelligence)

  // List of open vectors
  const isAttackAvailable =
    (selectedPlayer?.side === TeamSide.Blue &&
      selectedPlayer.type === PlayerType.Government &&
      isRussianGovernmentAttacked) ||
    (selectedPlayer?.side === TeamSide.Blue &&
      selectedPlayer.type === PlayerType.Intelligence &&
      isRosenergoatomAttacked) ||
    (selectedPlayer?.side === TeamSide.Red && selectedPlayer.type === PlayerType.People) ||
    (selectedPlayer?.side === TeamSide.Red && selectedPlayer.type === PlayerType.Industry) ||
    (selectedPlayer?.side === TeamSide.Red && selectedPlayer.type === PlayerType.Intelligence && isUkEnergyAttacked)

  return (
    <S.NavigationContainer>
      {/* Message log */}
      <div style={{ width: '150px', height: '100%' }}></div>

      {/* Display if actions are available */}
      <S.NavigationActions style={{ display: areActionsAvailable ? 'none' : 'flex' }}>
        {/* DISTRIBUTE */}
        {!isOnlineTrolls && (
          <S.ActionButtonWrapper
            bgColor="rgb(240, 234, 175)"
            title="Distribute"
            onClick={() => handleGameAction(GameNavigationClick.DISTRIBUTE)}
            disabled={areNavigationButtonsDisabled || hasMadeBid || isParalyzed}
          >
            <IconDistribute height="100%" fill="rgb(135, 119, 37)" />
          </S.ActionButtonWrapper>
        )}
        {isDistributeDialogOpen && <DistributeDialog onClose={() => setDistributeDialogOpen(false)} />}

        {/* REVITALISE */}
        <S.ActionButtonWrapper
          bgColor="rgb(178, 204, 215)"
          title="Revitalise"
          disabled={areNavigationButtonsDisabled || hasMadeBid || isParalyzed}
          onClick={() => handleGameAction(GameNavigationClick.REVITALISE)}
        >
          <IconRevitalise height="100%" fill="rgb(16, 88, 129)" />
        </S.ActionButtonWrapper>
        {isRevitaliseDialogOpen && <RevitaliseDialog onClose={() => setRevitaliseDialogOpen(false)} />}

        {/* ATTACK */}
        {isAttackPossible && (
          <S.ActionButtonWrapper
            bgColor="rgba(190, 64, 55, 0.4)"
            title="Attack"
            disabled={
              areNavigationButtonsDisabled ||
              !isAttackAvailable ||
              selectedPlayer.attackBanRemainingTurns > 0 ||
              hasMadeBid ||
              isParalyzed ||
              activePeriod === GamePeriod.January
            }
            onClick={() => handleGameAction(GameNavigationClick.ATTACK)}
          >
            <IconAttack height="100%" fill="rgb(143, 75, 70)" />
          </S.ActionButtonWrapper>
        )}
        {isAttackDialogOpen && <AttackDialog onClose={() => setAttackDialogOpen(false)} />}

        {/* ACCESS BLACK MARKET */}
        {selectedPlayer?.type === PlayerType.Intelligence && (
          <S.ActionButtonWrapper
            bgColor="rgb(68, 68, 68)"
            title="Black Market"
            disabled={areNavigationButtonsDisabled || selectedPlayer.biddingBanRemainingTurns > 0 || isParalyzed}
            onClick={() => handleGameAction(GameNavigationClick.ACCESS_BLACK_MARKET)}
          >
            <IconBlackMarket height="100%" fill="rgb(183, 183, 183)" />
          </S.ActionButtonWrapper>
        )}
        {isBlackMarketOpen && (
          <BlackMarket
            onClose={() => {
              setBlackMarketOpen(false)
              // Dont rerender everything on bidding, but when exiting the black market
              queryClient.invalidateQueries('game')
            }}
          />
        )}

        {/* ABSTAIN */}
        <S.ActionButtonWrapper
          bgColor="rgb(237, 204, 157)"
          title="Abstain"
          disabled={areNavigationButtonsDisabled || hasMadeBid}
          onClick={() => handleGameAction(GameNavigationClick.ABSTAIN)}
        >
          <IconAbstain height="100%" fill="rgb(176, 128, 61)" />
        </S.ActionButtonWrapper>
      </S.NavigationActions>

      {/* Display if actions are not available */}
      <S.NavigationActions style={{ display: areActionsAvailable ? 'flex' : 'none' }}>
        <span id="navigation-info-text">
          {gameStatus === GameStatus.NotStarted && isOwner && 'Press play to start the game'}
          {gameStatus === GameStatus.InProgress && activeSide === userSide && 'Select one of your entities'}
          {gameStatus === GameStatus.Paused && isOwner && 'Press play to continue the game'}
        </span>
      </S.NavigationActions>

      <div style={{ width: '150px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <InventoryButton onClose={() => setInventoryOpen(true)} />
        {isInventoryOpen && <TeamInventory onClose={() => setInventoryOpen(false)} teamSide={userSide} />}
      </div>

      {/* Active side indicator */}
      <S.ActiveSideBanner>
        {gameStatus === GameStatus.NotStarted && 'Game not started'}
        {gameStatus === GameStatus.InProgress && (isYourTurn ? 'Your turn' : "Opponent's turn")}
        {gameStatus === GameStatus.Paused && 'Game paused'}
        {gameStatus === GameStatus.Finished && outcome && (
          <S.WinnerTextWrapper outcome={outcome}>{getWinnerText(outcome)}</S.WinnerTextWrapper>
        )}
      </S.ActiveSideBanner>
    </S.NavigationContainer>
  )
}
