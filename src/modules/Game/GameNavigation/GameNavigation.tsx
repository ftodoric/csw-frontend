import { useEffect, useState } from 'react'

import { IconAbstain, IconAttack, IconBlackMarket, IconDistribute, IconRevitalise } from '@components/Icons'
import { useFinishTurn, usePostAction, useUserContext } from '@hooks'
import { GameAction, GameNavigationClick, GamePeriod, GameStatus, PlayerType, TeamSide } from '@types'

import { AttackDialog } from './AttackDialog'
import { BlackMarket } from './BlackMarket'
import { DistributeDialog } from './DistributeDialog'
import { RansomwareDialog } from './RansomwareDialog'
import { RevitaliseDialog } from './RevitaliseDialog'
import * as S from './styles'
import { InventoryButton, TeamInventory } from './TeamInventory'
import { removePlayer, setGameAction, useGameActionContext } from '../context/GameActionContext'
import { useGameContext } from '../context/GameContext'
import { getWinnerText } from '../utils'

interface NavigationProps {
  userSide: TeamSide
  isOwner: boolean
}

export const GameNavigation = ({ userSide, isOwner }: NavigationProps) => {
  const { user } = useUserContext()
  const { id: userId } = user!

  const makeAction = usePostAction()

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
    redTeam,
  } = game!

  const finishTurn = useFinishTurn(gameId)

  const { state, dispatch } = useGameActionContext()
  const { selectedPlayer } = state

  const [areActionsDisabled, setActionsDisabled] = useState(true)
  const [hasMadeBid, setHasMadeBid] = useState(false)
  const [isParalyzed, setParalyzed] = useState(false)
  const [canTransferResource, setCanTransferResource] = useState(true)

  const [isDistributeDialogOpen, setDistributeDialogOpen] = useState(false)
  const [isRevitaliseDialogOpen, setRevitaliseDialogOpen] = useState(false)
  const [isAttackDialogOpen, setAttackDialogOpen] = useState(false)
  const [isBlackMarketOpen, setBlackMarketOpen] = useState(false)
  const [isInventoryOpen, setInventoryOpen] = useState(false)

  useEffect(() => {
    if (selectedPlayer && !selectedPlayer.wasRansomwareAttacked) {
      if (selectedPlayer.user.id === userId) {
        setActionsDisabled(false)
      }

      if (selectedPlayer.paralysisRemainingTurns > 0) {
        setParalyzed(true)
      } else {
        setParalyzed(false)
      }

      if (!game![userSide].canTransferResource) {
        setCanTransferResource(false)
      } else {
        setCanTransferResource(true)
      }

      setHasMadeBid(selectedPlayer.hasMadeBid)
    } else setActionsDisabled(true)
  }, [userId, game, selectedPlayer, userSide])

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
        if (selectedPlayer) {
          makeAction.mutate({ actionType: GameAction.ABSTAIN, playerId: selectedPlayer.id })
          dispatch(setGameAction(selectedPlayer, GameAction.ABSTAIN))
          dispatch(removePlayer())
        }

      default:
        break
    }
  }

  const handleFinishTurn = () => {
    finishTurn.mutate(state.madeActions)
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

  const ransomwareAttackerId = selectedPlayer && redTeam[selectedPlayer?.type].id
  const ransomwareVictimId = selectedPlayer && selectedPlayer.id

  return (
    <S.NavigationContainer>
      {/* Message log */}
      <div style={{ width: '150px', height: '100%' }}></div>

      {/* Display if actions are available */}
      <S.NavigationActions style={{ display: areActionsDisabled ? 'none' : 'flex' }}>
        {/* DISTRIBUTE */}
        {!isOnlineTrolls && (
          <S.ActionButtonWrapper
            bgColor="rgb(240, 234, 175)"
            title="Distribute"
            onClick={() => handleGameAction(GameNavigationClick.DISTRIBUTE)}
            disabled={!canTransferResource || hasMadeBid || isParalyzed}
          >
            <IconDistribute height="100%" fill="rgb(135, 119, 37)" />
          </S.ActionButtonWrapper>
        )}
        {isDistributeDialogOpen && <DistributeDialog onClose={() => setDistributeDialogOpen(false)} />}

        {/* REVITALISE */}
        <S.ActionButtonWrapper
          bgColor="rgb(178, 204, 215)"
          title="Revitalise"
          disabled={hasMadeBid || isParalyzed}
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
            disabled={selectedPlayer.biddingBanRemainingTurns > 0 || isParalyzed}
            onClick={() => handleGameAction(GameNavigationClick.ACCESS_BLACK_MARKET)}
          >
            <IconBlackMarket height="100%" fill="rgb(183, 183, 183)" />
          </S.ActionButtonWrapper>
        )}
        {isBlackMarketOpen && (
          <BlackMarket
            onClose={() => {
              setBlackMarketOpen(false)
            }}
          />
        )}

        {/* ABSTAIN */}
        <S.ActionButtonWrapper
          bgColor="rgb(237, 204, 157)"
          title="Abstain"
          disabled={hasMadeBid}
          onClick={() => handleGameAction(GameNavigationClick.ABSTAIN)}
        >
          <IconAbstain height="100%" fill="rgb(176, 128, 61)" />
        </S.ActionButtonWrapper>
      </S.NavigationActions>

      {/* Display if actions are not available */}
      <S.NavigationActions style={{ display: areActionsDisabled ? 'flex' : 'none' }}>
        <span id="navigation-info-text">
          {selectedPlayer?.wasRansomwareAttacked ? (
            <RansomwareDialog
              attackerId={ransomwareAttackerId!}
              victimId={ransomwareVictimId!}
              hasVictimEnoughResource={selectedPlayer.resource > 2}
            />
          ) : (
            <>
              {gameStatus === GameStatus.NotStarted && isOwner && 'Press play to start the game'}
              {gameStatus === GameStatus.InProgress && activeSide === userSide && 'Select one of your entities'}
              {gameStatus === GameStatus.Paused && isOwner && 'Press play to continue the game'}
            </>
          )}
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
        {gameStatus === GameStatus.Finished && outcome !== undefined && (
          <S.WinnerTextWrapper outcome={outcome}>{getWinnerText(outcome)}</S.WinnerTextWrapper>
        )}
      </S.ActiveSideBanner>

      <S.FinishTurnButton onClick={handleFinishTurn} disabled={activeSide !== userSide}>
        <div>Finish turn</div>
      </S.FinishTurnButton>
    </S.NavigationContainer>
  )
}
