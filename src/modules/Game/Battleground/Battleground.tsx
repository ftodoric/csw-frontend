import { useCallback, useEffect, useState } from 'react'
import { Connection, Edge, ReactFlow, addEdge, useEdgesState, useNodesState } from 'reactflow'

import { Game, TeamSide } from '@types'

import calculateEdges from './edges.config'
import { EntityContainer } from './Entity'
import { HelpDialog, HelpDialogButton } from './HelpDialog'
import calculateNodes from './nodes.config'
import * as S from './styles'

interface BattlegroundProps {
  game: Game
  userSide: TeamSide
}

const nodeTypes: any = {
  entity: EntityContainer,
}

/**
 * This component defines React Flow panel and initializes its nodes and edges.
 *
 * Custom defined node type is an Entity container which receives all data through a nodes caluclation function.
 *
 * This component should only be modified in case of React Flow configuration,
 * or in case of adding additional props to Entity container.
 */
export const Battleground = ({ game, userSide }: BattlegroundProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(calculateNodes(game, userSide))
  const [edges, setEdges, onEdgesChange] = useEdgesState(calculateEdges(game, userSide))

  const [isHelpDialogOpen, setHelpDialogOpen] = useState(false)

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds: Edge[]) => addEdge(params, eds)),
    [setEdges]
  )

  // Recalculate nodes and edges on any prop update
  useEffect(() => {
    setNodes(calculateNodes(game, userSide))
    setEdges(calculateEdges(game, userSide))
  }, [game, userSide, setNodes, setEdges])

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
        zoomOnDoubleClick={false}
        zoomOnPinch={false}
        preventScrolling={true}
        proOptions={{ hideAttribution: true }}
      />

      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <HelpDialogButton onClose={() => setHelpDialogOpen(true)} />
        {isHelpDialogOpen && <HelpDialog onClose={() => setHelpDialogOpen(false)} />}
      </div>
    </S.BattlegroundContainer>
  )
}
