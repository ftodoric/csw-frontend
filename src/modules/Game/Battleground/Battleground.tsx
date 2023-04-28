import { useCallback, useEffect } from 'react'
import { ReactFlow, addEdge, useEdgesState, useNodesState } from 'reactflow'

import { Game, TeamSide } from '@types'

import { initialEdges } from './edges'
import { EntityContainer } from './Entity'
import { getInitialNodes } from './nodes'
import * as S from './styles'

interface BattlegroundProps {
  game: Game
  userSide: TeamSide
}

const nodeTypes: any = {
  entity: EntityContainer,
}

export const Battleground = ({ game, userSide }: BattlegroundProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    getInitialNodes(game, userSide)
  )
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges(userSide))

  const onConnect = useCallback(
    (params: any) => setEdges((eds: any) => addEdge(params, eds)),
    [setEdges]
  )

  useEffect(() => {
    setNodes(getInitialNodes(game, userSide))
  }, [game, userSide, setNodes])

  useEffect(() => {
    setEdges(initialEdges(userSide))
  }, [userSide, setEdges])

  return (
    <S.BattlegroundContainer>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        panOnDrag={false}
        zoomOnScroll={false}
        proOptions={{ hideAttribution: true }}
      />
    </S.BattlegroundContainer>
  )
}
