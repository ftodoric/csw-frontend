import { Handle, Position } from 'reactflow'

import { EntityType, TeamSide } from '@types'

interface EdgeHandleDeterminatorProps {
  type: EntityType
  side: TeamSide
}

/**
 * Here are defined all handles with their respective handle IDs, which are referenced in edges configuration.
 */
export const EdgeHandleDeterminator = ({ type, side }: EdgeHandleDeterminatorProps) => {
  return (
    <>
      <Handle type="source" position={Position.Top} id="fromTop" />
      <Handle type="source" position={Position.Right} id="fromRight" />
      <Handle type="source" position={Position.Bottom} id="fromBottom" />
      <Handle type="source" position={Position.Left} id="fromLeft" />

      <Handle type="target" position={Position.Top} id="toTop" />
      <Handle type="target" position={Position.Right} id="toRight" />
      <Handle type="target" position={Position.Bottom} id="toBottom" />
      <Handle type="target" position={Position.Left} id="toLeft" />
    </>
  )
}
